// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    let increaseClick = this.state.timesClicked + 1
    this.setState({
      timesClicked: increaseClick
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }

} // end of class

export default DigitalClicker;
