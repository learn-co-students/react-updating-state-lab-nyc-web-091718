import React, {Component} from 'react'

export default class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  }

  handleClick = (event) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1

    })
  }

  render() {
    return (
      <div>
        <label>{this.state.timesClicked}</label>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
