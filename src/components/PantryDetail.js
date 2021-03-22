import React, { Component } from 'react';
import { connect } from 'react-redux';

class PantryDetail extends Component {

  render() {
    return (
      <div className="flex flex-col h-full text-white text-center mt-20 text-4xl">
       <span>Coming Soon!</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(PantryDetail);