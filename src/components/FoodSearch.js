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
        <div className="flex flex-col h-full text-white mt-12">
          <form className="grid grid-rows-1 justify-center text-center" onSubmit={this.handleSubmit}>
            <input className="text-black rounded px-1" type="text" placeholder="Search..." value={this.state.searchTerm} onChange={this.handleChange} />
            <br />
            <input className="bg-green-800 rounded px-1" type="submit" value="Search"/>
            <br />
            <h2>Searching...</h2>
          </form>
        </div>
      )
    }
    else {
      return (
        <div className="flex flex-col h-full text-white mt-12">
          <form className="grid grid-rows-1 justify-center text-center" onSubmit={this.handleSubmit}>
            <input className="text-black rounded px-1" type="text" placeholder="Search..." value={this.state.searchTerm} onChange={this.handleChange} />
            <br />
            <input className="bg-green-800 rounded px-1" type="submit" value="Search" />
            <br />
          </form>
          <div className="ml-5">
            <FoodList found_foods={this.state.found_foods} id={this.state.id}/>
          </div>
        </div>
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