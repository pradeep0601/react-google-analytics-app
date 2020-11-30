import React, { Component } from "react";

class PurchaseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPurchased: false
    }
  }
    onClick = () => {
      // after we’ve confirmed purchase completed
      console.log('====Purchase clicked===');
      this.setState({
        isPurchased: !this.state.isPurchased
      })
    }
  
    render() {
      return (
        <div>
         {this.state.isPurchased && <p>You baught a product</p>}
         <button onClick={this.onClick}>
           {this.state.isPurchased ? 'Back': 'Purchase'}
         </button>
        </div>
        
      )
    }
  }
  
  
  export default PurchaseButton;