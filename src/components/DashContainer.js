import React, { Component } from 'react';
import VerticalNavBar from './VerticalNavBar.js';
import DetailView from './DetailView.js';

export default class Landing extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <VerticalNavBar />
        <DetailView />
      </>
    )
  }
}