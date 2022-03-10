import React from 'react'
import img1 from '../../images/Home/sec5-1.png'
import img2 from '../../images/Home/sec5-2.png'
import img3 from '../../images/Home/sec5-3.png'
import img4 from '../../images/Home/sec5-4.png'
import './comp5.css'


const Component5 = () =>{
    return(
    <div className='comp5_container'>
        <div className='comp5_wrapper'>
            <h1 className='header'>Online Deep Virtual Experience</h1>
            <aside className='comp5-card one grid2'>
                <img src={img1} alt="Img"></img>
                <p>CLOTHES</p>
            </aside>
            <aside className='comp5-card two grid2'>
                <img src={img2} alt="Img"></img>    
                <p>EYE WEAR</p> 
            </aside>   
            <aside className='comp5-card three grid2'>
                <img src={img3} alt="Img"></img>    
                <p>MAKEUP</p>
            </aside>
            <aside className='comp5-card four grid2'>
                <img src={img4} alt="Img"></img>    
                <p>JEWELLERY</p>
            </aside>   
            
            <ul className='five'>
                <li>
                    Bridging the gap between online and offline retailing through experiential shopping.
                </li>
                <li>
                    Reducing returns by supplying the right product through Virtual Try-On.
                </li>
            </ul>

        </div>    
    </div>
    )
}

export default Component5;