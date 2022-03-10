import React,{useState} from 'react';
import './comp1.css';
import img1 from '../../images/Home/img1.png'
import img2 from '../../images/Home/img2.png'
import img3 from '../../images/Home/img3.png'

const Component = () => {
    const [moreLess, setMoreLess] = useState('More');
    
    const handleShowMore = () =>{
        moreLess==='More'? setMoreLess('Hide'): setMoreLess('More');

    }
    return(
    <div className="comp1_container">
      
        <div className='comp1_background'></div>
        <div className='comp1_Header_container'>
        <h1 className='comp1_Header'><b className="simu">S</b>imu<b className='simu'>V</b>erse: The Metaverse of  Customer<span className="comp1-block"> Experience & Shopping</span></h1>
        <h2 className='comp1_Sub-Header'>Enhancing the retail shopping experience by giving physical stores 
            the advantage ecommerce, <span className={moreLess}> while reducing returns and environmental waste by creating a more sustainable 
            supply chain using AI enabled digital technologies.</span> <span onClick={handleShowMore} className='showMore'>{moreLess}...</span>
        </h2>
    
        </div>
        
        
        <div className='comp1_body'>
        
            <aside>
                <h2>In Store Reality <span>Experience</span></h2>
                <img src={img1} alt="Img"></img>
            </aside>
            <aside>
                <h2>Online Virtual <span>Experience</span></h2>
                <img src={img2} alt="Img"></img>
            </aside>
            <aside>
                <h2>3D Model Viewer <span>and Designer</span></h2>
                <img src={img3} alt="Img"></img>
            </aside>
            
        </div>
    </div>
    )
}

export default Component;