// JSX - JavaScript XML



var appHeader = {
    title: "My First React App",
    subTitle: "10.16.2020",
    options: ["one", "two"]
};

var template1 = (
    <div>
        <h1>{appHeader.title}</h1>
        {appHeader.subTitle && <h3>{appHeader.subTitle}</h3>}
        <p>{appHeader.options.length > 0 ? "Here are your options: " : "No options"}</p>
        <ol>
            <li>item1</li>
            <li>item2</li>
        </ol>
    </div>
);


var user = {
    name: "Ali",
    age: 25,
    location: "Michigan"
};

function getLocation(location) {
    if (location) {
    return <p>location: {location}</p>;
    } else {
        return undefined;
    }
}

var template2 = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);



var appRoot = document.getElementById("app");
ReactDOM.render(template1, appRoot);