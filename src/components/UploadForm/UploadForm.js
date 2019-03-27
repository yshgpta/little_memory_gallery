import React,{Component} from 'react';


import './UploadForm.css'



class UploadForm extends Component{
  constructor(props){
    super(props)
    this.state={
      myvar:'',
      masterKey:''
    }
  }

  validateKey = (event) =>{
    this.setState({
      myvar:event.target.value
    })
  }

  getAccess = (event) =>{
    this.setState({
      masterKey:this.state.myvar
    })
  }

  render(){
    return (
      <div className='uploadform-header'>
      {this.state.masterKey === 'pixelart'
      ? <div><div className='uploadform-title'>Upload Your Memories</div>
        <div className='uploadform-body'>
          <label className='input-label'>
            Select Image
            <input onChange={this.props.fileSelectHandler} type='file' className='input-file'/>
          </label>
          <button onClick={this.props.fileUploadHandler} className='upload-btn'>Upload</button>
        </div>
        </div>
      : <div><div className='validation-title'>Enter Master Key to unlock Upload Feature</div>
    <input onChange={this.validateKey} type='password' className='input-key' placeholder='Enter Master Key'/>
        <input onClick={this.getAccess} type='submit' className='access-btn' value='Get Access'/>
        </div>
      }
      </div>
    )
  }
}

export default UploadForm;
