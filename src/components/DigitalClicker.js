import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = (event) => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }

  render() {
    return(
      <button type="button" onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}
