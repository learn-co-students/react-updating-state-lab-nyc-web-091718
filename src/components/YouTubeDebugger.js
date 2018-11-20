// Code YouTubeDebugger Component Here
import React, {Component,Fragment} from "react"


export default class YouTubeDebugger extends Component{
  state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
              resolution: '1080p'
        }
      }
  }
  handleBitClick = ()=>{
    this.setState({
        settings:{
          ...this.state.settings,
          bitrate:12
        }
    })

  }

  handleResClick = ()=>{
    this.setState({
        settings:{
          ...this.state.settings,
          video:{
            resolution: '720p'
          }
        }
    })
  }

  render(){
    console.log(this.state);
    return(
      <Fragment>
        <button
          className='bitrate'
          onClick={this.handleBitClick}
        ></button>
        <button
          className='resolution'
          onClick={this.handleResClick}
        ></button>
      </Fragment>
    )
  }
}
