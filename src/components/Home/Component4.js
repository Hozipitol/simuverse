import React from 'react'
import sec4 from '../../images/Home/sec4.png'
import './comp4.css'

const Component4 = () =>{
    return(
        <div className="comp4_container">
            <div className='comp4_left'>
                <h1>FOR ONLINE <span>PLAYERS</span></h1>
                <ul>
                    <li>
                        Online only stores can now setup digital stores without having a physical store
                    </li>
                    <li>
                        Digital Pop-Up and Concept Stores with minimal investments
                    </li>
                    <li>
                        Users can virtually try-on, which cannot be done online
                    </li>
                    <li>
                        Give true ommni-channel experience to your customers
                    </li>
                </ul>
            </div>
            <img src={sec4} alt="Img"></img>
        </div>
    )
}

export default Component4;