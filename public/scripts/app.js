"use strict";

// JSX - JavaScript XML


var appHeader = {
    title: "My First React App",
    subTitle: "10.25.2020",
    options: ["one", "two"]
};

var template1 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        appHeader.title
    ),
    appHeader.subTitle && React.createElement(
        "h3",
        null,
        appHeader.subTitle
    ),
    React.createElement(
        "p",
        null,
        appHeader.options.length > 0 ? "Here are your options: " : "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "item1"
        ),
        React.createElement(
            "li",
            null,
            "item2"
        )
    )
);

var count = 0;
var addOne = function addOne() {
    console.log("1");
};
var minusOne = function minusOne() {
    console.log("-1");
};
var zero = function zero() {
    console.log("0");
};
var someId = "myID";
var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: zero },
        "0"
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    )
);

console.log(template2);

var appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);
