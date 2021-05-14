import React, { Component } from 'react'
import './SearchResults.css'
import TrackList from '../TrackList/TrackList'

class SearchResult extends Component{
    render(){
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.SearchResults} onAdd={this.props.onAdd} />
            </div>
        );
    }
}

export default SearchResult;