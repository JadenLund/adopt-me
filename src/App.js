import React from "react";
import { render } from "react-dom";

const myObj = { x: 1 };
const { x } = myObj;

const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement(
            "h1",
            { /*className or id*/ },
            "Adopt Me!"
        ),
        React.createElement(Pet, {
            name: "Beef",
            animal: "Dog",
            breed: "Pit Bull",
        }),
        React.createElement(Pet, {
            name: "Lasagna",
            animal: "Lizard",
            breed: "Iguana",
        }),
        React.createElement(Pet, {
            name: "Daisy",
            animal: "Cat",
            breed: "Maincoon Tabby",
        }),
    ]);
};

render(React.createElement(App), document.getElementById("root"));
