import { useState } from "react";
import ReactGA from 'react-ga';

function Buy() {
    const [isBought, buy] = useState(false);
    
    const clickHandler = (isBought) => {
        buy(isBought);
        if(isBought) {
            ReactGA.pageview('Buy page');
            ReactGA.event({
                category: 'Button',
                action: "Clicked Buy Button"
            });
        }
        else {
            ReactGA.pageview('Home page');
        }
    }
    
    return(
        <div>
            {isBought ? "You have bought successfully!!" : "Discount: No, Regular price!!"}
            <br></br>
            {
                isBought ? <button className = 'back-btn' onClick = {() => clickHandler(false)}>Back</button>
                : <button className = 'buy-btn' onClick = {() => clickHandler(true)}>Buy</button>
            }
        </div>
    );
}
export default Buy;