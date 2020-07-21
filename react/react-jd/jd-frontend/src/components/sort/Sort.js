import React, { Component } from 'react'
import Search from './search/Search';
import SortList from './sortlist/SortList';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <Search />
        <SortList />
      </div>
    );
  }
}

export default Sort;