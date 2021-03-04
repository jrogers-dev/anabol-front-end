import React, { Component } from 'react';
import VerticalNavBar from './VerticalNavBar.js';
import DetailView from './DetailView.js';

export default class Landing extends Component {

  render() {
    return (
      <>
        <VerticalNavBar />
        <DetailView />
      </>
    )
  }
}