import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { id: 1, title: 'Jurassic Park', read: false },
        { id: 2, title: 'Timeline', read: false },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Books to Read</h1>
        </header>
        <br/>

      </div>
    );
  }
}

export default App;
