import React from 'react';
import './comp6.css';
import img3 from '../../images/Home/img3.png'

const Component6 = () => {
    return(
        <div className='comp6_container'>
            <div className='comp6_wrapper'>
                <h2 className='comp6_wrapper-title'>
                    Rapidly evolve your supply chain and reduce fashion waste with intelligent 3D product modelling.
                </h2> 
                <section className='comp6_wrapper-model'>
                    <h2>
                        3D Model Viewer and Designer
                    </h2>
                    <img src={img3} alt="Img" />
                </section>
                
                <section className='comp6_wrapper-body'>
                <p>
                    SimuVerse’s digital modelling software will allow your retail business to design photorealistic products quickly and remotely.
                </p>
                    <h2>Sustainable Supply Chain</h2>
                    Become a driving force in the push for sustainable fashion with a digital supply chain that significantly reduces material waste.
                    <h2>Efficient Revisions</h2>
                    Eliminate physical samples, reduce production time and make fast corrections with accurate depictions of the fabric fit, form and drape.
                    <h2>Fast to Market</h2>
                    Digital sampling drastically accelerates your time to market. Stay agile with evolving fashion trends and beat your competitors to market.
                    <h2>On-Demand Manufacturing</h2> 
                    Sampling, refining and showcasing products digitally allows you the added flexibility of on-demand manufacturing, preventing excess inventory.

                 
                </section>
            </div>    
        </div>
    )
}

export default Component6;