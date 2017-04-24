import React from "react";
import { render } from "react-dom";

import "prismjs";
import "prismjs/components/prism-jsx";
import Presentation from "./presentation";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("prismjs/themes/prism-coy.css");

render(<Presentation />, document.getElementById("root"));
