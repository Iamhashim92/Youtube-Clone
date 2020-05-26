import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '' };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onSubmit}>
          <div className='field'>
            <label>Search for Videos You Like</label>
            <input
              value={this.state.term}
              type='text'
              className='validate'
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
