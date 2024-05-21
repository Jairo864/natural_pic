import React from 'react'
import { useContext } from 'react'
import { PhotosContext } from '../context/PhotosContext'
import Gallery from '../components/Gallery'

const Home = () => {

    const {photos} = useContext(PhotosContext)

    const filterPhotos = photos.filter(photo => photo.hasOwnProperty('photographer'))

  return (
    <>
        <h1>Natural Pic</h1>
        <div className='rowStyle'>
        {
            filterPhotos && filterPhotos.map(photo =>(
                <Gallery photo={photo} key={photo.id} />
            ))
        }
        </div>
    </>
    
  )
}

export default Home