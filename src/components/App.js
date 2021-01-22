import React from "react";
import Youtube from "../api/Youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onSearchSubmit("Flamengo the best team")
    }

    onSearchSubmit = async (term) => {
        const response = await Youtube.get("/search", {
            params: {
                q: term
            }
        })

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    onSelectedVideo = (video) => {
        console.log(this.state.videos[0])
        this.setState({ selectedVideo: video })
    }

    render() {

        return (
            <div className="ui container" style={{ padding: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            {this.state.selectedVideo ? <VideoDetail video={this.state.selectedVideo} /> : "loading..."}
                        </div>
                        <div className="six wide column">
                            <VideoList onSelectedVideo={this.onSelectedVideo} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
