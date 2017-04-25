// Import React
import React from "react";
// Import Spectacle Core tags
import {
  Deck,
  Heading,
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
import RxFilter from "./rxjs/rx-filter";
import RxMap from "./rxjs/rx-map";
import RxMapFilter from "./rxjs/rx-map-filter";
import RxMerge from "./rxjs/rx-merge";
import AllOperators from "./rxjs/all-operators";

require("../assets/fonts/fonts.css");
require("./style.css");

const images = {
  reactivex: require("../assets/reactivex.svg"),
  eventLoop: require("../assets/eventLoop.svg"),
  nodejs: require("../assets/nodejs.png"),
  promiseObservable: require("../assets/promise-observable.svg"),
  coding: require("../assets/coding.gif"),
  hotvscold: require("../assets/hotvscold.jpg"),
};

preloader(images);

const theme = createTheme(
  {
    primary: "#eee",
    secondary: "#6f6f6f",
    tertiary: "#b52e31",
    quartenary: "#ec0c8e"
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
const shadowedTextStyle = {
  textShadow: "black 0px 1px 0px"
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
          <Appear fid="2">
            <Text textColor="quartenary" size={3}>
              And no Angular today
            </Text>
          </Appear>
        </Slide>

        {/*Async*/}
        <Slide bgImage={images.nodejs} {...containStyle} transition={["zoom"]}>
          <Heading size={2} fit lineHeight={2} textColor="primary" style={shadowedTextStyle}>
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
        <Slide bgImage={images.coding} {...containStyle}>
          <Link href="https://repl.it/HZZU/latest" target="_blank" >
            <Text bold caps textColor="tertiary">Promises //</Text>
          </Link>
        </Slide>
        <Slide bgImage={images.coding} {...containStyle}>
          <Link href="https://repl.it/HZ1Z/2" target="_blank" >
            <Text bold caps textColor="tertiary">Promises chained</Text>
          </Link>
        </Slide>

        {/*RxJS*/}
        <Slide
          transition={["zoom"]}
          bgImage={images.reactivex}
          {...containStyle}
        >
          <Link href="http://reactivex.io/" target="_blank" >
            <Heading size={2} fit lineHeight={2} textColor="primary" style={shadowedTextStyle}>
              ReactiveX
            </Heading>
          </Link>
          <Appear fid="1">
            <Text textColor="tertiary" size={1} fit bold>
              Extensions reactive
              </Text>
          </Appear>
        </Slide>
        <Slide bgImage={images.promiseObservable} {...containStyle} />
        <Slide transition={["fade"]}>
          <RxMap />
        </Slide>
        <Slide transition={["fade"]}>
          <RxFilter />
        </Slide>
        <Slide transition={["fade"]}>
          <RxMapFilter />
        </Slide>
        <Slide transition={["fade"]}>
          <RxMerge />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} fit lineHeight={2} textColor="secondary" >
              Many operators !!!!
          </Heading>
          <AllOperators />
        </Slide>
        <Slide bgImage={images.coding} {...containStyle}>
          <Link href="https://jsbin.com/qezovodeqi/1/edit?js,output" target="_blank" >
            <Text bold caps textColor="tertiary">Form event</Text>
          </Link>
        </Slide>
        <Slide bgImage={images.coding} {...containStyle}>
          <Link href="https://jsbin.com/heduvaboha/1/edit?js,output" target="_blank" >
            <Text bold caps textColor="tertiary">Subject</Text>
          </Link>
        </Slide>
        <Slide bgImage={images.hotvscold}>
          <Heading size={2} fit lineHeight={2} textColor="primary" style={shadowedTextStyle}>
            Hot vs Cold
          </Heading>
        </Slide>
        <Slide bgImage={images.coding} {...containStyle}>
          <Link href="https://repl.it/H0U5/2" target="_blank" >
            <Text bold caps textColor="tertiary">Cold observable</Text>
          </Link>
        </Slide>
        <Slide bgImage={images.coding} {...containStyle}>
          <Link href="https://repl.it/H0VU/1" target="_blank" >
            <Text bold caps textColor="tertiary">Hot observable</Text>
          </Link>
        </Slide>
        <Slide bgImage={images.coding} {...containStyle}>
          <Link href="https://repl.it/H0W9/1" target="_blank" >
            <Text bold caps textColor="tertiary">Share observable</Text>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
