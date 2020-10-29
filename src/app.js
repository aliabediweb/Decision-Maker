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

const onMakeDecision = () => {
    const randomNum = Math.random() * (appHeader.options.length);
    const randomInt = Math.floor(randomNum);
    const option = appHeader.options[randomInt];
    alert(option);
}

const appRoot = document.getElementById("app");



const render = () => {
    const template1 = (
        <div>
            <h1>{appHeader.title}</h1>
            {appHeader.subTitle && <h3>{appHeader.subTitle}</h3>}
            <p>{appHeader.options.length > 0 ? "Here are your options: " : "No options"}</p>
            <button disabled={appHeader.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    appHeader.options.map((option) => <li key={option}>Option: {option}</li>)
                }
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