import React from 'react';
import './TryOn.css';
import Profile from '../../images/upload.png'

const TryOn = () => {
    const firstImageHandler = (e) => {
        if (e.target.files.length > 0) {
            var src = URL.createObjectURL(e.target.files[0]);
            var preview = document.getElementById("image-preview");
            preview.src = src;
            console.log(e.target.files[0]);
        }
    }

    const secondImageHandler = (e) => {
        if (e.target.files.length > 0) {
            var src = URL.createObjectURL(e.target.files[0]);
            var preview = document.getElementById("image-preview-two");
            preview.src = src;
            console.log(e.target.files[0]);
        }
    }
    const handleSubmit = (e) => {
        console.log("hello");
    }
    return (
        <>
            <div className="try">
                <div className="box">
                    
                    <input type="file" name='image-uploader' onChange={firstImageHandler} id='image-uploader' accept='image/*' />
                    <label htmlFor="image-uploader" className='browse'>Upload Image</label>
                    <br />
                    <br />

                    <div className='preview-try'>
                        <img src={Profile} id="image-preview" alt="" />
                    </div>
                </div>

                <div className="box">
                    
                    <input type="file" name='image-uploader-two' onChange={secondImageHandler} id='image-uploader-two' accept='image/*' />
                    <label htmlFor="image-uploader-two" className='browse'>Upload Image</label>
                    <br />
                    <br />
                    <div className='preview-try'>
                        <img src={Profile} id="image-preview-two" alt="" />
                    </div>
                </div>
            </div>
            <button onClick={handleSubmit}>Get your Image</button>
        </>
    )
}

export default TryOn