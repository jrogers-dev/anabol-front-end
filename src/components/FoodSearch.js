import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoods } from '../actions/foodActions';

import FoodList from './FoodList';


class FoodSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      id: props.match.params.id
    };
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchFoods(this.state.searchTerm);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search..." value={this.state.searchTerm} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Search" />
          <br />
          <FoodList foods={this.props.foods} id={this.state.id}/>
        </form>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    foods: state.foods
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFoods: (searchTerm) => dispatch(fetchFoods(searchTerm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodSearch);