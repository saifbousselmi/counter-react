// src/App.js
import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import hideicon from './components/hide.png'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Show: false,
    };
  }

  // Using arrow function to avoid binding
  toggleCounter = () => {
    this.setState(prevState => ({ Show: !prevState.Show }));
  };

  render() {
    const { Show} = this.state;

    return (
      <div className="App">
        <h1>Counter Application</h1>
        <button style={{ borderRadius:"50%",border:"none",marginTop:"50px",width:"100px",height:"50px"}} onClick={this.toggleCounter}>
          {Show ? <img style={{height:"40px",width:"60px"}}src={hideicon}/> : <img style={{height:"40px",width:"60px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7AB2sJ6ecBBk8auP2YHys_7Wqt4WWVdbZw&s'/>}
        </button>
        {Show && <Counter />}
      </div>
    );
  }
}

export default App;

