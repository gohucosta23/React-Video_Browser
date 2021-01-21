import React from "react";
import Youtube from "../api/Youtube";
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = {
        term: ""
    }

    onSearchSubmit = async (term) => {
        const response = await Youtube.get("", {
            params: {
                q: term
            }
        })

        console.log(response)
    }
    render() {

        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;
