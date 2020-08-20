import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    apost: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ apost: res.express }))
      .then(res => console.group(res))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/post/one');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/api/post/new', {
  //     method: 'POST',
  //     header: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({post: this.state.post})
  //   });
  //   const body = await response.text();

  //   this.setState({responseToPost: body});
  // }


  render() {
    return (
      <div className="App">
        <p>{this.state.apost}</p>
      </div>
    );
  }
}

export default App;
