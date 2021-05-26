import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchField } from "./components/search-box/search-box.component";

import './App.css';

class App extends Component {
  //state = {  }
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    //this.handleChange = this.handleChange.bind(this); - alternatively use Arrow function
  }

  //Lifecycle Method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  //Class Method
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }

  //Arrow Function
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() { 
    const { monsters, searchField } = this.state; //Equivalent to const monsters = this.state.monsters;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return ( 
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchField 
          placeholder='Search Monster' 
          handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>

      // <div className='App'>
      //   <header className='App-header'>
      //   <h1>{this.state.string}</h1>
      //   <button onClick={() => this.setState({ string: 'Welcome to React World' })}>Change Text</button>
      //   </header>
      // </div>
     );
  }
}
 
export default App;
