import React from 'react'
import './About.css'
import Growth from './Charts/Growth';
import Retail from './Charts/Retail';
import Return from './Charts/Return';
import Revenue from './Charts/Revenue';
import ReturnReason from './Charts/ReturnReason';
import 'bootstrap/dist/css/bootstrap.min.css'

import Abt from './Abt'



function About() {
  return (
    <div>
    <Abt />
   <div className="c3">
    <Revenue />
    </div>
    <div className="c2">
    <Growth />
    </div>
    <div className="c3">
    <Retail />
    </div>
    <div className="c1">
    <Return />
    </div>
    <div className="c3">
    <ReturnReason />
    </div>
    </div> 
  )
}

export default About