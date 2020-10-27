"use strict";

// Indecision App


var appHeader = {
    title: "My First React App",
    subTitle: "10.25.2020",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        appHeader.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onRemoveAll = function onRemoveAll() {
    appHeader.options = [];
    render();
};

var appRoot = document.getElementById("app");

var render = function render() {
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
            "p",
            null,
            appHeader.options.length
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
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
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template1, appRoot);
};

render();
