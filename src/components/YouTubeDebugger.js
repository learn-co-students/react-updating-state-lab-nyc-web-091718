import React, {Component} from 'react';

export default class YouTubeDebugger extends Component{
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  }

  handleRes = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: {resolution: '720p'}
      })
    });
  }

  render(){
    return(
      <div>
        <button
          onClick={this.handleBitrate}
          className="bitrate">
        </button>
        <button
          onClick={this.handleRes}
          className="resolution">
        </button>
      </div>
    )
  }
}
