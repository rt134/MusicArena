import React, { Component } from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'


class Playist extends Component{

    constructor(props){
        super(props);

        this.handleNameChange=this.handleNameChange.bind(this);
    }

    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }


    render(){
        return (
            <div className="Playist">
                <input onChange={this.handleNameChange} defaultValue={'New Playlist'} />
                <TrackList track={this.props.PlayListTracks} isRemoval={true} 
                onRemove={this.props.onRemove}
                />

                <button className="Playlist-save" onClick={this.props.onSave}>Save to spotify</button>
            </div>
        );
    }
}

export default Playist;