import React, { Component } from 'react';
import VerticalNavBar from './VerticalNavBar.js';
import DetailContainer from './DetailContainer.js';

export default class Landing extends Component {

  render() {
    return (
      <div className="flex flex-col-2 h-full">
        <div className="flex-col w-32 bg-green-900 text-center py-5"><VerticalNavBar /></div>
        <div className="flex-grow bg-black -mt-1"><DetailContainer /></div>
      </div>
    )
  }
}