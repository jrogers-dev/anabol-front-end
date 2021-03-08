import React, { Component } from 'react';
import VerticalNavBar from './VerticalNavBar.js';
import DetailContainer from './DetailContainer.js';

export default class Landing extends Component {

  render() {
    return (
      <>
        <VerticalNavBar />
        <DetailContainer />
      </>
    )
  }
}