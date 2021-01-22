import React from "react";
import VideoItem from "./VideoItem";


const VideoList = props => {

    const videoItem = props.videos.map(video => (
        <VideoItem videos={video} />
    ))
    return (
        <div>{videoItem}</div>
    )
}

export default VideoList;