"use strict";

// JSX - JavaScript XML


var appHeader = {
    title: "My First React App",
    subTitle: "10.16.2020",
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

var user = {
    name: "Ali",
    age: 25,
    location: "Michigan"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "location: ",
            location
        );
    } else {
        return undefined;
    }
}

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");
ReactDOM.render(template1, appRoot);
