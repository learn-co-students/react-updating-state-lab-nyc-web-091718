import React from 'react';

export default class YoutubeDebugger extends React.Component {
 state= {
  errors: [],
  user: null,
  settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
    }
  }
 }

 handleClick = event => {
   if (event.target.name === "bitrate") {
    this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
  } else if ( event.target.name === "resolution" ) {
  this.setState({ settings: {
    ...this.state.settings,
    video: {
      ...this.state.settings.video,
      resolution: '720p'
        }
      }
    })
  }
}

  render() {
    return (
      <div>
        <button name="bitrate" onClick={this.handleClick} className=".bitrate" >bitrate</button>
        <button name="resolution" onClick={this.handleClick} className=".resolution" >resolution</button>
      </div>
    )
  }
}
