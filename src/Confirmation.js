import React, { Component } from "react";

class Confirmation extends React.Component {
    constructor() {
      super();
      this.state = {
        items: []
      };
    }
  render() {
    return (
      <div>
        <div>
          Confirmation Page {Math.floor(Math.random() * 100000)}
          <div> test</div>
        </div>
      </div>
    );
  }
}

export default Confirmation;
