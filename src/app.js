// JSX - JavaScript XML

var appHeader = {
    title: 'My First React App',
    subTitle: '10.16.2020',
}

var template = (
    <div>
        <h1>{appHeader.title}</h1>
        <p>{appHeader.subTitle}</p>
        <ol>
            <li>item1</li>
            <li>item2</li>
        </ol>
    </div>
);

var user = {
    name: 'Ali',
    age: 25,
    location: 'Michigan',
}

// var userName = 'Mike';
// var userAge = 27;
// var userLocation = 'Philly';

var template2 = (
    <div>
        <h1>{`${user.name}!`}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);