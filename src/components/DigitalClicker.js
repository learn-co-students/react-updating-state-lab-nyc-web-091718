import React, {Component} from 'react';

export default class DigitalClicker extends Component{
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState({timesClicked: ++this.state.timesClicked})
  }

  render(){
    return(
      <button
        onClick={this.handleClick}
        type="button"
        value={this.state.timesClicked}>
        {this.state.timesClicked}
      </button>
    )
  }
}
