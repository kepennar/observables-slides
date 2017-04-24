import React, { Component } from "react";
import { Observable } from "rxjs";
import OperatorDiagram from "rxjs-diagrams";

export default class DiagSample extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <OperatorDiagram fit
          label=".combineLatest((x, y) => '' + x + y)"
          transform={(a, b) =>
            Observable.combineLatest(a, b, (x, y) => "" + x + y)}
          emissions={[
            [{ x: 5, d: 1 }, { x: 35, d: 2 }, { x: 70, d: 3 }],
            [{ x: 10, d: "A" }, { x: 45, d: "B" }, { x: 80, d: "C" }]
          ]}
          end={70}
          completion={70}
        />
      </div>
    );
  }
}
