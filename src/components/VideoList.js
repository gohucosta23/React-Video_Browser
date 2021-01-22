import React from "react";
import VideoItem from "./VideoItem";
import Wrapper from "./Wrapper";


const VideoList = ({ videos, onSelectedVideo }) => {

    const renderedList = videos.map(video => (
        <VideoItem key={video.etag} onSelectedVideo={onSelectedVideo} videos={video} />
    ))
    return (
        <Wrapper>
            <div className="ui relaxed divided list" style={{ height: "550px", overflow: "scroll", padding: "20px" }}>{renderedList}</div>
        </Wrapper>
    )
}

export default VideoList;