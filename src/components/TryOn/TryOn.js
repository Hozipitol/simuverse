import React,{ useState } from 'react';
import './TryOn.css';
import Profile from '../../images/upload.png'

const TryOn = () => {
    const [file1,setFile1]= useState("");
    const [file2,setFile2]= useState("");
   
    const firstImageHandler = (e) => {
        
<<<<<<< HEAD
        
       
=======
>>>>>>> 7bdfb1d41bb3ae1e759c840a28e59864bd737245
        if (e.target.files.length > 0) {
            var src = URL.createObjectURL(e.target.files[0]);
            var preview = document.getElementById("image-preview");
            preview.src = src;
            setFile1(src);
            console.log(e.target.files[0])
        }
    
        
    }

    const secondImageHandler = (e) => {
        
        if (e.target.files.length > 0) {
            var src = URL.createObjectURL(e.target.files[0]);
            var preview = document.getElementById("image-preview-two");
            preview.src = src;
            setFile2(src);
            console.log(e.target.files[0]);
        }
    }
    const handleSubmit = (e) => {
        var blop =[file1,file2]
        console.log(blop);
    
    }
    return (
        <>
            <div className="try">
                <div className="box">
                    
                    <input type="file" name='image-uploader' onChange={firstImageHandler} id='image-uploader' accept='image/*' />
                    <label htmlFor="image-uploader" className='browse'>Upload Your Image</label>
                    <br />
                    <br />

                    <div className='preview-try'>
                        <img src={Profile} id="image-preview" alt="" />
                    </div>
                </div>

                <div className="box">
                    
                    <input type="file" name='image-uploader-two' onChange={secondImageHandler} id='image-uploader-two' accept='image/*' />
                    <label htmlFor="image-uploader-two" className='browse'>Upload Cloth Image</label>
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