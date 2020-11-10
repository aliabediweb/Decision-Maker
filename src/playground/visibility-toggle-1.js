// Visibility Toggle (Attempt)



const appHeader = {
    title: "Visibility Toggle",
    options: "Hidden Data",
};

const toggleData = () => {
    if (appHeader.options) {
        appHeader.options = "";
        render();
    } else {
        appHeader.options = "Hidden Data";
        render();
    }
};



const appRoot = document.getElementById("app");

const render = () => {
    const template1 = (
        <div>
            <h1>{appHeader.title}</h1>
            <button onClick={toggleData}>Toggle</button>
            <p>{appHeader.options}</p>
        </div>
    );

    ReactDOM.render(template1, appRoot);
};



render();