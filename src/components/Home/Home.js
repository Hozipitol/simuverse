import React,{ useState, useEffect} from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
// import Component6 from './Component6';
import Icon, {UpOutlined } from '@ant-design/icons'
import './home.css';
function Home() {
  const[height, setHeight] = useState(0);
  
  useEffect(() => {            // function to check the scroll height  
    const onScroll = () => setHeight(window.pageYOffset);
    console.log(height);
    // ------------------clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, [height]);
  
//------------------scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
  return (
    <div  className='home_container'>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      {/* <Component6 /> */}
      
      {height > 200? <div className='scroll-top' onClick={scrollToTop}> <Icon component={UpOutlined} style={{fontSize:"15px", color:"white"}} /></div>: <div></div>} 
    </div>
  )
}

export default Home