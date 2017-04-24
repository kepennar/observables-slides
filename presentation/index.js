// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Image,
  Slide,
  Text,
  Link,
  Appear
} from "spectacle";

import DiagSample from "./diag-sample";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

require("../assets/fonts/fonts.css");

const images = {
  reactivex: require("../assets/reactivex.svg")
  // chemicalEq: require("../assets/chemical-equation.png"),
  // htmlTable: require("../assets/html-periodic-table.png"),
  // polymerElements: require("../assets/polymer-elements.png"),
  // angular: require("../assets/angular-icon.svg"),
  // comps: require("../assets/components.png"),
  // compsConnected: require("../assets/components-connected.png")
};
const containStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain"
};
preloader(images);

const theme = createTheme(
  {
    primary: "#EEE",
    secondary: "#8d088e",
    tertiary: "#b52e31",
    quartenary: "#CECECE"
  },
  {
    primary: "Roboto",
    secondary: "Track"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading
            size={1}
            fit
            caps
            lineHeight={2}
            textFont="secondary"
            textColor="secondary"
          >
            Observables
          </Heading>
          <Text textColor="tertiary" size={1} fit bold>
            Reactive programming with RxJS
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.reactivex} style={containStyle} />
        <Slide transition={["fade"]}>
          <DiagSample />
        </Slide>
      </Deck>
    );
  }
}
