'use strict';

// JSX - JavaScript XML

var appHeader = {
    title: 'My First React App',
    subTitle: '10.16.2020'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appHeader.title
    ),
    React.createElement(
        'p',
        null,
        appHeader.subTitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item1'
        ),
        React.createElement(
            'li',
            null,
            'item2'
        )
    )
);

var user = {
    name: 'Ali',
    age: 25,
    location: 'Michigan'

    // var userName = 'Mike';
    // var userAge = 27;
    // var userLocation = 'Philly';

};var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
