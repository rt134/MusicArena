import { Component } from 'react'
import './App.css'
import React from 'react'
import Playlist from ""
import SearchBar from ""
import SearchResults from ""
import Spotify from ""

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: []
    }

    this.search = this.search.bind(this);
    this.addTrack = this.addtrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlalist = this.savePlalist.bind(this);
    this.removeTrackSearch = this.removeTrackSearch.bind(this);
    this.doThese = this.doThese.bind(this);
  }
  
  search(term){
    spotify.search(term).then(searchResults =>{
        this.setState({searchResults: searchResults});
    });
  }

  addTrack(track){
    let tracks=this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id == track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    let trackSearch = this.state.searchResults;
    tracks= tracks.filter(currentTrack => currentTrack.id !== track.id);
    trackSearch.unshift(track);
    this.setState({playlisttracks: tracks});
  }

  removeTrackSearch(track){
    let tracks = this.state.searchResults;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({searchResults:tracks});
  }

  doThese(track){
    this.addtrack(track);
    this.removeTrackSearch(track);
  }

  updatePlaylistName(name){
    this.setState({updatePlaylistName: name});
  }

  savePlalist(){
    const trackUris = this.state.playlisttracks.map(track => track.uri);
    Spotify.savePlalist(this.state.playlistName,trackUris).then( () =>{
      this.setState({
        updatePlaylistName: "New Playlist",
        playlistTracks : []
      });
    });
  }
  
  render(){
    return (
      <div>
        <h1>
          <a href="http://localhost:3000">MusicalApp</a>
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.doThese} />
            <Playlist playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} onSave={this.savePlalist} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
