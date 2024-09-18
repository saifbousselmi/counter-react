// src/components/Counter.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import resetIcon from './reset-icon.png'; // Import your local icon

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      Show: false, // Assuming you have this state to control visibility
    };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return { count: prevState.count - 1 };
      }
      return null; // Prevent state change if count is 0
    });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  toggleShow = () => {
    this.setState(prevState => ({ Show: !prevState.Show }));
  };

  render() {
    const { Show, count } = this.state;

    return (
      <div
        style={{
          alignItems: "center",
          border: "1px solid darkGray",
          marginTop: "50px",
          height: "400px",
          width: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          marginLeft:"600px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
        }}
      >
        <h1>Counter:</h1>
        <h2 style={{ fontSize: "100px" }}>{count}</h2>
        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.increment}
          >
            <strong>+</strong>
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={this.decrement}
            style={{ marginLeft: "10px", marginRight: "10px" }} // Add space
          >
            <strong>-</strong>
          </button>
        </div>
        <button
          type="button"
          className="btn"
          style={{
            backgroundImage: `url(${resetIcon})`,
            width: '50px',
            height: '50px',
            backgroundSize: 'cover',
            border: 'none',
            cursor: 'pointer'
          }}
          onClick={this.reset}
        ></button>

     
      </div>
    );
  }
}

export default Counter;
