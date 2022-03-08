import React from 'react'
import Growth from './Charts/Growth';
import Retail from './Charts/Retail';
import Return from './Charts/Return';
import Revenue from './Charts/Revenue';
import "bootstrap/dist/css/bootstrap.min.css";
import ReturnReason from './Charts/ReturnReason';


function About() {
  return (
    <div>
    <Revenue />
    <Growth />
    <Retail />
    <Return />
    <ReturnReason />
    </div> 
  )
}

export default About