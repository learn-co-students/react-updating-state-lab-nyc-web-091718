import React from 'react'

class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
       bitrate: 8,
       video: {
         resolution: '1080p' }
       }
    }

  clickHandlerBitrate = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    }

  clickHandlerResolution = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }
      })
    }

  render() {
    return (
      <React.Fragment>
        <button className="bitrate" onClick={this.clickHandlerBitrate}></button>
        <button className="resolution" onClick={this.clickHandlerResolution}></button>
      </React.Fragment>
    )
  }
} // End of YouTubeDebugger Class

export default YouTubeDebugger
