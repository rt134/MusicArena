import React, { Component } from'react'
import './SearchBar.css'

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state={
            term:""
        };

        this.handleTermChange=this.handleTermChange.bind(this);
        this.search=this.search.bind(this);
        this.handleEnter=this.handleEnter.bind(this);
    }

    handleTermChaneg(event){
        this.setState({term: event.target.value});
    }

    search(){
        this.props.onSearch(this.state.term);
    }

    gandleEnter(event){
        if(event.keyCode === 13){
            this.search();
        }
    }

    render(){
        return (
            <div className="SearchBar">
                <input placeholder="Enter the name of song" onChange={this.hamdleTermChange} onKeyUp={this.handleEnter} />
                <button className="SearchButton" onClick={this.search}>Search</button>
            </div>
        );
    }

    

}

export default SearchBar;