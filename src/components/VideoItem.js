import React from "react";
import "./VideoItem.css";

const VideoItem = ({ videos, onSelectedVideo }) => {
    return (
        <div onClick={() => onSelectedVideo(videos)} key={videos.snippet.etag} className="item video-item">
            <img className="ui image" src={videos.snippet.thumbnails.medium.url} alt={videos.snippet.channelTitle}></img>
            <div className="content">
                <div className="header">{videos.snippet.title}</div>
            </div>
        </div>
    )

}

export default VideoItem;