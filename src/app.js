// JSX - JavaScript XML



const appHeader = {
    title: "My First React App",
    subTitle: "10.25.2020",
    options: ["one", "two"]
};

const template1 = (
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

let count = 0;
const addOne = () => {
    console.log("1");
};
const minusOne = () => {
    console.log("-1");
};
const zero = () => {
    console.log("0");
};
const someId = "myID"
const template2 = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={minusOne}>-1</button>
        <button onClick={zero}>0</button>
        <button onClick={addOne}>+1</button>  
    </div>

);

console.log(template2)



const appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);