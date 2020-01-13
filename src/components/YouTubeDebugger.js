import React from 'react';

class YouTubeDebugger extends React.Component{
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

    handleClick = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings,{
                bitrate: 12
            })
        })
        return console.log(this.state.settings.bitrate)
    }
    
    // handleOtherClick = () => {
    //     this.setState({
    //         settings: Object.assign({}, this.state.settings,{
    //             video: Object.assign({}, this.state.settings.video,{
    //                 resolution: '720p'
    //             })
    //         })
    //     })
    //     return console.log(this.state.settings.video.resolution)
    // }
    
    handleOtherClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
            return console.log(this.state.settings.video.resolution)
    }

    render(){
        return(
            <div>
                <button 
                    className='bitrate'
                    onClick={this.handleClick}
                >change bitrate</button>
                <button
                    className='resultion'
                    onClick={this.handleOtherClick}
                    >change resolution</button>
            </div>
        )
    }

}

export default YouTubeDebugger;