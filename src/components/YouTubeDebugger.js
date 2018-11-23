// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor(){
    super();
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

  handleBitClick = () => {
    console.log(this.state);
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    }, ()=> console.log('new bitrate', this.state));

    // this.setState({
    //   settings: {
    //     ...this.state.settings,
    //     bitrate: 12
    //   }
    // },
    // ()=>console.log('new bitrate',this.state))
  } // end handleBitClick fn

  handleResClick = () => {
    console.log(this.state);
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    }, ()=> console.log('new res', this.state))
  }

  render() {
    return (
      <React.Fragment>
      <button className='bitrate' onClick={this.handleBitClick}>BitRate</button>
      <button className='resolution' onClick={this.handleResClick}>Resolution</button>
      </React.Fragment>
    )
  }

}
