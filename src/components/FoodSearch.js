import React, { Component } from 'react';
import { connect } from 'react-redux';

import FoodList from './FoodList';


class FoodSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      searchTerm: "",
      id: props.match.params.id,
      found_foods: []
    };
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchFoods(this.state.searchTerm);
  }

  searchFoods(searchTerm) {
    this.setState({...this.state, loading: true});
    fetch(`https://nutritionix-api.p.rapidapi.com/v1_1/search/${searchTerm}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_protein%2Cnf_total_carbohydrate`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "d0c7efd202mshd71efa7aa963462p129b78jsn273f9b7e10d0",
        "x-rapidapi-host": "nutritionix-api.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(json => { this.setState({...this.state, loading: false, found_foods: json }) })
    ;
  }

  render() {
    if (this.state.loading) {
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search..." value={this.state.searchTerm} onChange={this.handleChange} />
            <br />
            <input type="submit" value="Search"/>
            <br />
            <h2>Searching...</h2>
          </form>
        </>
      )
    }
    else {
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search..." value={this.state.searchTerm} onChange={this.handleChange} />
            <br />
            <input type="submit" value="Search" />
            <br />
            <FoodList found_foods={this.state.found_foods} id={this.state.id}/>
          </form>
        </>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(FoodSearch);