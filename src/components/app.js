import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      numstomap: [
        {
          name: "Eidan",
          description: "asdfrrrrrrr",
        },
        {
          name: "Ronald",
          description: "asdf",
        },
      ],
    };
  }

  mapdata() {
    return this.state.numstomap.map((item) => {
      return (
        <div>
          <h1>{item.name}</h1>
          <h3>{item.description}</h3>
        </div>
      );
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
