import React from "react";
import { Observable } from "rxjs";
import OperatorDiagram from "rxjs-diagrams";

export default () => (
  <OperatorDiagram fit
    label=".merge(a, b)"
    transform={(a, b) => Observable.merge(a, b)}
    emissions={[
      [{ x: 10, d: 5 }, { x: 20, d: 15 }, { x: 30, d: 8 }, { x: 40, d: 11 }],
      [{ x: 2, d: 1 }, { x: 15, d: 2 }, { x: 35, d: 3 }]
    ]}
    end={70}
    completion={70}
  />
);
