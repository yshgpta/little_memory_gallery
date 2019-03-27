import React from 'react'

import DisplayGallery from '../DisplayGallery/DisplayGallery'
import './ImageList.css'

const ImageList = ({imageList,newImage}) =>{
  if(imageList){
    const imageComponent = imageList.map((img,i)=>{
      return <DisplayGallery key={i} imageUrl={img.url}/>
    })

  return(
    <div className='imagelist-header'>
      <div className='imagelist-title'>Your Photos goes here...</div>
      <div className='imagelist-body'>
      {imageComponent}
      <img src={newImage.url} alt='' width='auto' height='300px' className='imagelist-newimage'/>
      </div>
    </div>
  )
}else{
  return(<div></div>)
}
}

export default ImageList;
