import React from "react";


class SearchBar extends React.Component {

    state = {
        term: ""
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment serch-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Bar</label>
                        <input value={this.state.term} type="text" onChange={e => this.setState({ term: e.target.value })}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
