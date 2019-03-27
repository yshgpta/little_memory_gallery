import React from 'react';

import './DisplayGallery.css'

const DisplayGallery = ({imageUrl}) =>{
  return(
      <img src={imageUrl} alt='img' width='auto' height='300px' className='display-header'/>
  )

}
 export default DisplayGallery;
