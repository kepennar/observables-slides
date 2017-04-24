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
  Appear,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import DiagSample from "./rxjs/diag-sample";

require("../assets/fonts/fonts.css");
require("./style.css");

const images = {
  reactivex: require("../assets/reactivex.svg"),
  eventLoop: require("../assets/eventLoop.svg"),
  nodejs: require("../assets/nodejs.png"),
  promiseObservable: require("../assets/promise-observable.svg")
  // htmlTable: require("../assets/html-periodic-table.png"),
  // polymerElements: require("../assets/polymer-elements.png"),
  // angular: require("../assets/angular-icon.svg"),
  // comps: require("../assets/components.png"),
  // compsConnected: require("../assets/components-connected.png")
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

const containStyle = {
  bgRepeat: "no-repeat",
  bgSize: "contain"
};

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
          <Appear fid="1">
            <Text textColor="tertiary" size={1} fit bold>
              Reactive programming with RxJS
            </Text>
          </Appear>
        </Slide>
        {/*Async*/}
        <Slide bgImage={images.nodejs} {...containStyle} transition={["zoom"]}>
          <Heading size={2} fit lineHeight={2}>
            Javascript est asynchrone
          </Heading>
          <Appear fid="1">
            <Text textColor="tertiary" size={1} fit bold>
              Event loop
            </Text>
          </Appear>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={images.eventLoop}
          {...containStyle}
        />
        <Slide>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code/callbacks.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/code/promises.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide bgImage={images.promiseObservable} {...containStyle} />
        
        {/*RxJS*/}
        <Slide
          transition={["zoom"]}
          bgImage={images.reactivex}
          {...containStyle}
        >
          <Appear fid="1">
            <Heading size={1} fit lineHeight={2}>
              ReactiveX
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]}>
          <DiagSample />
        </Slide>
      </Deck>
    );
  }
}
