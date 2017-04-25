import React from "react";
import { Observable } from "rxjs";
import OperatorDiagram from "rxjs-diagrams";

export default () => (
  <OperatorDiagram fit
    label="obs.filter(x => x > 10)"
    transform={(obs) => obs.filter((x) => x > 10)}
    emissions={[
      [{ x: 10, d: 5 }, { x: 20, d: 15 }, { x: 30, d: 8 }, { x: 40, d: 11 }]
    ]}
    end={70}
    completion={70}
  />
);
