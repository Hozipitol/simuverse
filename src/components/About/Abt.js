import React from 'react'
import './Abt.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import pic1 from '../../images/Picture1.jpg'
import pic2 from '../../images/Picture2.png'
import t1 from '../../images/t1.png'
import t2 from '../../images/t2.png'
import t3 from '../../images/t3.png'
import t4 from '../../images/t4.png'
function Abt() {
  return (
    <div>
     <div class="container-fluid c1">
      <div class="row"> 
     <div class="col-sm-12">  

     <h3>SimuVerse Services
 </h3>
      </div>
     </div>
     <hr />
     <div class="row"> 
        <div class="col-lg-4">
            <img src={pic2} height="80%" />
        </div>
        <div class="col-lg-8 ">
            
              <h5>
            The SimuVerse team is a unique blend of mathematicians, software developers, and artists, and is ready to take up any challenging custom project.
              </h5>
              <br/>
              <div class=" col-sm-8 para1">
              <ul>
                <li>3D math and algorithms, CPU and GPU optimization</li>
                <li>Web, desktop, mobile (iOS, Android, Unity3D), and cloud solution development</li>
                <li>3D graphics: 3D engines, photo-realistic rendering, material shaders. V-Ray, Unity3D and Unreal Engine.
</li>
                <li>3D and 2D art, design, sculpturing, rigging, and animation</li>
                <li>3D clothes design, animation, and rendering</li>
                <li>3D body and face scanning.</li>
              </ul>
              </div>
              
            
        </div>
       </div>
       </div>
    
       <div class="container-fluid c2">
     <div class="row"> 
     <div class="col-sm-12">  

     <h3>Rapidly evolve your supply chain and reduce fashion waste with intelligent 3D product modelling. </h3>
      </div>
     </div>
     <hr />
     <div class="row"> 
        <div class="col-lg-4">
            <img src={pic1} height="70%" style={{borderRadius: "5%"}} />
        </div>
        <div class="col-lg-8 ">
            <p class="para2">
                <br/>
              SimuVerse's digital modelling software will allow your retail business to design photorealistic products quickly and remotely.
         
              <h5>Sustainable Supply Chain</h5>
              Become a driving force in the push for sustainable fashion with a digital supply chain that significantly reduces material waste.
              
              <h5>Efficient Revisions</h5>
              Eliminate physical samples, reduce production time and make fast corrections with accurate depictions of the fabric fit, form and drape.
              
              <h5>Fast to Market</h5>
              Digital sampling drastically accelerates your time to market. Stay agile with evolving fashion trends and beat your competitors to market.
              
              <h5>On-Demand Manufacturing</h5>
              Sampling, refining and showcasing products digitally allows you the added flexibility of on-demand manufacturing, preventing excess inventory.

              
            </p>
        </div>
       </div>
       </div>
       <div class="container-fluid c1">
      <div class="row"> 
     <div class="col-sm-12">  

     <h2>How is SimuVerse Different ?
 </h2>
      </div>
      <hr/>
      <div class="col-sm-12">  

     <h3>General Software / AR Based Try - On </h3>
      </div>
     </div>


     <div class="row"> 
        <div class="col-md-6">
            <img src={t1} width="80%" />
        </div>
        <div class="col-md-6 ">
        <img src={t2} width="80%" />
        </div>
       </div>
        <div class="col-sm-12">  

          <h3>SimuVerse Intelligent Engine with Deep Learning
 </h3>
           </div>
       <div class="row"> 
        <div class="col-md-6">
            <img src={t3} width="80%" />
        </div>
        <div class="col-md-6 ">
        <img src={t4} width="80%" />
        </div>
       </div>

       </div>
    </div>
    
  )
}

export default Abt