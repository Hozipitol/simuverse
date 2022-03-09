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
    <Revenue />
    <Growth />
    <Retail />
    <Return />
    <ReturnReason />
    </div> 
  )
}

export default About