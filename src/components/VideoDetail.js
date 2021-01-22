import React from "react";
import Wrapper from "./Wrapper";

const VideoDetail = ({ video }) => {
    return (
        <Wrapper>
            <div>
                <div className="ui embed">
                    <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title={video.snippet.title}></iframe>
                </div>
                <div className="ui segment">
                    <div className="ui header">{video.snippet.title}</div>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default VideoDetail;