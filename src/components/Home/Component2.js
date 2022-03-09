import React from "react";
import Icon, { ChromeFilled, DollarCircleFilled, UpCircleFilled, DownCircleFilled,
                CheckCircleFilled,MinusCircleFilled, FundFilled
} from '@ant-design/icons';

import './comp2.css';
const Component2 = () =>{
    return(
        <div className="comp2_container">
        <h1 className="header">Deep In Store Reality Experience</h1>
        <div className="comp2_container--sub">
           
            <span className="one">
                <div className="icon">
                    <Icon component={ChromeFilled } style={{fontSize:"70px"}} />
                </div>
                
                <h2>VIRTUAL TRY-ON</h2>
                <p>
                Allow your customers to try on any of your products, anywhere, 
                anytime – without the wait of a change room.
                </p>
            </span>
            <span className="two">
            <div className="icon">
                <Icon component={ DollarCircleFilled } style={{fontSize:"70px"}} />
                </div>
                <h2>REDUCE RETURNS</h2>
                <p>
                Reduce returns by allowing customers to see your products in hi-res products on their body type.
                </p>
            </span>
            <span className="three">
            <div className="icon">
                    <Icon component={ UpCircleFilled  } style={{fontSize:"70px"}} />
                </div>
                <h2>INCREASE AOV</h2>
                <p>
                Average order value is bound to increase with this easy and competitive shopping experience
                </p>
            </span>
            <span className="four">
            <div className="icon">
                    <Icon component={CheckCircleFilled } style={{fontSize:"70px"}} />
                </div>
                <h2>REDUCE SPACE</h2>
                <p>
                Don’t be limited by floor space. Showcase all your products while they are out of stock or new collection items.
                </p>
            </span>
            <span className="five">
            <div className="icon">
                    <Icon component={FundFilled } style={{fontSize:"70px"}} />
                </div>
                <h2>THE EXPERIENCE</h2>
                <p>
                Give your customers a shopping experience to remember by standing out from your competitors.
                </p>
            </span>
            <span className="six">
            <div className="icon">
                    <Icon component={DownCircleFilled } style={{fontSize:"70px"}} />
                </div>
                <h2>REDUCE COST</h2>
                <p>
                Reduce your operating costs by allowing SimuVerse’s Smart Mirror’s automated 
                system to do all the hard work for you!
                </p>
            </span>
            <span className="seven">
                <div className="icon">
                    <Icon component={MinusCircleFilled } style={{fontSize:"70px"}} />
                </div>
                <h2>REDUCE WASTE</h2>
                <p>
                Help reduce your eco footprint by providing a solution that minimises material 
                wastage or damaged stock.
                </p>
            </span>
        </div>
        </div>
    )
}

export default Component2;