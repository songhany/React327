import React, { Component } from 'react'
import ParentChild from './ParentChild';
import Unmount from './Unmount';
import MultipleUpdates from './MultipleUpdates';

export default class Day3 extends Component {  
  render() {
    return (
      <div>
        <MultipleUpdates />
      </div>
    )
  }
}

