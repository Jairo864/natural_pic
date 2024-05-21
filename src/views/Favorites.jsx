import React from 'react'
import { useContext } from 'react'
import { PhotosContext } from '../context/PhotosContext'
import Gallery from '../components/Gallery'

const Favoritos = () => {

  const {photos} = useContext(PhotosContext)
  return (
    <>
      <h1>Favoritos</h1>
      <div className='rowStyle'>
      {
          photos && photos.filter(photo => photo.like == true).map(photo =>(
              <Gallery photo={photo} key={photo.id} />
          ))
      }
    </div>
    </>
    
  )
}

export default Favoritos;