import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state= {
      fruits:[],
      searchField: ''
    };
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'http://tropicalfruitandveg.com/api/tfvjsonapi.php?search=all';
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(fruitsApi => this.setState({fruits: fruitsApi.results}))
  }
  
  
  render(){
    const { fruits, searchField } = this.state;
      const filteredFruits = fruits.filter(fruit =>
        fruit.tfvname.toLowerCase().includes(searchField.toLowerCase())
      )
  return (
    <div className="App">
      <h1>Fruits</h1>
        <SearchBox placeholder='search fruits' 
          handleChange={this.handleChange}/>
          <p><br></br></p>
        <CardList fruits = {filteredFruits}>
        </CardList>
    </div>
  );
  }
}

export default App;
