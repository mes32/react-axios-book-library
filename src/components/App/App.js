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

  renderBooks = (books) => {
    let booksForDom = [];
    for (let book of books) {
      booksForDom.push(<li>{book.title}</li>);
    }
    return booksForDom;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Books to Read</h1>
        </header>
        <br/>
        {JSON.stringify(this.state)}
        <ul>{this.renderBooks(this.state.books)}</ul>


      </div>
    );
  }
}

export default App;
