import React, { Component } from 'react';
import VideoList from './VideoList';
import Youtube from '../api/Youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';

export default class App extends Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit('Magical Messi');
  }
  onTermSubmit = async (term) => {
    const KEY = 'AIzaSyBpyho_e5PngBzzI-eEkj8vJ_HM';
    const response = await Youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: KEY,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
