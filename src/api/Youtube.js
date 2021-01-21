import axios from "axios";

const KEY = "AIzaSyBIVmqQBngpZJIq8A90H-fI_JxKvgqhyTU";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/search",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
})