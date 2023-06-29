import React, { Component } from 'react'
import ParentChild from './ParentChild';
import Unmount from './Unmount';
import MultipleUpdates from './MultipleUpdates';
import Immutable from './Immutable';
import FetchAPI from './FetchAPI';

export default class Day3 extends Component {  
  render() {
    return (
      <div>
        <ParentChild />
      </div>
    )
  }
}

