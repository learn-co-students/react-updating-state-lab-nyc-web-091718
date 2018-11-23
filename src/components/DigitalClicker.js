import React from 'react';
import ReactDOM from 'react-dom';

 class DigitalClicker extends React.Component{
  constructor(){
    super();
    this.state = {
      timesClicked: 0,
    }
  }

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
    
  }

  render(){
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
} //end class

export default DigitalClicker;
