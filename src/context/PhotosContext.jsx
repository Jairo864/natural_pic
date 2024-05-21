import { createContext, useEffect, useState } from "react";

export const PhotosContext = createContext();

const PhotosProvider = ({children}) => {
    const [photos, setPhotos] = useState([])
    const getData = async () => {
        const data = await fetch('./photos.json')
        const response = await data.json()
        let photos = Object.values(response)
        const allData = photos.flat().map(photo => ({...photo, like:false}))
        setPhotos(allData)
    }

    useEffect(() =>{
        getData()
    }, [])

    return (
        <PhotosContext.Provider value = {{photos,setPhotos}}>
            {children}
        </PhotosContext.Provider>
    )
}

export default PhotosProvider