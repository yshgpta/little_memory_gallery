import React, { Component } from 'react';
import axios from 'axios';

import Timeline from '../Timeline/Timeline'
import GalleryIntro from '../GalleryIntro/GalleryIntro'
import UploadForm from '../UploadForm/UploadForm'
import ImageList from '../ImageList/ImageList'

import './Gallery.css'

const CLOUDINARY_URL = 	" https://api.cloudinary.com/v1_1/de8middwc/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "cys4excj"



class Gallery extends Component {
  constructor(){
    super();
    this.state={
      selectedImage:'',
      imageInfo:{
        url:'',
        filename:'',
        status:''
      },
      imageList:''
    }
  }
  fileSelectHandler = (event) =>{
    this.setState({
      selectedImage:event.target.files[0]
    })
  }

  fileUploadHandler = () =>{
    const fd = new FormData();
    fd.append('file', this.state.selectedImage)
    fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    axios({
      url:CLOUDINARY_URL,
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: fd
    })
    .then(response=>{
      this.setState({
        imageInfo:{
          url: response.data.secure_url,
          filename: response.data.original_filename,
          status: response.status
        }
      })
      this.uploadToDatabase(this.state.imageInfo)
    })
  }


  uploadToDatabase = (data) =>{
    if(data.status===200){
      fetch('https://dry-fortress-38309.herokuapp.com/postgallery',{
        method: 'post',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          imgInfo:data
        })
      })
    }
  }

  getFromDatabase = () =>{
    fetch('https://dry-fortress-38309.herokuapp.com/getgallery')
    .then(response => response.json())
    .then(data=>{
      this.setState({
        imageList:data
      })
    })
  }

  componentWillMount(){
    this.getFromDatabase();
  }



  render() {
    return (
      <div>
        <GalleryIntro/>
        <Timeline/>
        <UploadForm
          fileSelectHandler={this.fileSelectHandler}
          fileUploadHandler={this.fileUploadHandler}/>
        <ImageList imageList={this.state.imageList} newImage={this.state.imageInfo}/>
      </div>
    )
  }
}
export default Gallery;
