import React from 'react'
import { useContext } from 'react'
import { PhotosContext } from '../context/PhotosContext'
import IconHeart from './IconHeart'

const Gallery = ({photo}) => {

    const {photos,setPhotos} = useContext(PhotosContext)

    const agregarFavorito = (id) => {
        const photoActualizada = photos.map(photo =>{
            if(photo.id === id){
                return{
                    ...photo, 
                    like: !photo.like
                }
            }
            return photo
        })
        setPhotos(photoActualizada)
    }

    

    return (
    <div className='col-md-3'>
        <div className="card">
            <img src={photo.src.landscape} className={`card-img-top img-style ${photo.like ? '' : 'desaturate'}`} />
            <div className="card-body overlay">
                <p className="card-text">{photo.alt}</p>
            </div>
            <div className='overlayHeart'>
                <div onClick={() => agregarFavorito(photo.id)} className="heart-icon">
                        <IconHeart filled={photo.like} />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery