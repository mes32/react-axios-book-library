import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    }
  }

  renderBooks = (books) => {
    let booksForDom = [];
    for (let book of books) {
      booksForDom.push(<li>{book.title}<button onClick={this.markRead}>Read</button></li>);
    }
    return booksForDom;
  }

  getBooksFromServer = () => {
    axios({
      method: 'GET',
      url: '/books',
    }).then((response) => {
      this.setState({
        books: response.data,
      });
    })
  }

  markRead = (event) => {
    console.log('I read a great book');
  }


  componentDidMount() {
    this.getBooksFromServer();
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
