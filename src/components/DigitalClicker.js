import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = (event) => {
    this.setState({timesClicked: this.state.timesClicked + 1})
  }
  render() {
    return (
      <div>
        <label>{this.state.timesClicked}</label>
        <button onClick={this.handleClick} value={this.state.timesClicked}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
