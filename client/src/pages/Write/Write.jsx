import React from 'react'
import './Write.css'
import { Icon } from '@iconify/react';
const Write = () => {
  return (
    <div className='write'>
        <img src="https://fakeimg.pl/700x400/ff0000,128/000,255" alt="writeImage" className="writeImg" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                    <Icon className='iconAdd' icon="carbon:add-filled"  width="32" height="32" />
                </label>
                <input type='file' id='fileInput' className='inputFileEdit'></input>
                <input type='text'placeholder='Title' className='inputTitle' autoFocus={true}></input>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Write Something...' type='text' className='writeInput writeText' >

                </textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write