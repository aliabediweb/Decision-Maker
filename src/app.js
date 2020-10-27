// Indecision App



const appHeader = {
    title: "My First React App",
    subTitle: "10.25.2020",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        appHeader.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    appHeader.options = [];
    render();
};

const appRoot = document.getElementById("app");

const render = () => {
    const template1 = (
        <div>
            <h1>{appHeader.title}</h1>
            {appHeader.subTitle && <h3>{appHeader.subTitle}</h3>}
            <p>{appHeader.options.length > 0 ? "Here are your options: " : "No options"}</p>
            <p>{appHeader.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>item1</li>
                <li>item2</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template1, appRoot);
};


render();