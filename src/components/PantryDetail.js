import React, { Component } from 'react';
import { connect } from 'react-redux';

class PantryDetail extends Component {

  render() {
    return (
      <>
       <span>Pantry Detail!</span>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(PantryDetail);