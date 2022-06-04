import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      numstomap: [1, 2, 3, 4, 5],
    };
  }

  mapdata() {
    return this.state.numstomap.map((num) => {
      return <h1>{num}</h1>;
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Items</h1>
        {this.mapdata()}
      </div>
    );
  }
}
