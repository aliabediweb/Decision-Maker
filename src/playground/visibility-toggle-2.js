// Visibility Toggle (Solution)



// initialize 'visibility':
let visibility = false;

// flip 'visibility' boolean:
const toggle = () => {
    visibility = !visibility;
    // render after each button click
    render();
};

// render funcion:
const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            {/* button text changes depending on visibility */}
            <button onClick={toggle}>
                {visibility ? "Hide" : "Show"}
            </button>
            {/* text to toggle */}
            {visibility && (
                <div>
                    <p>Hidden Data</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById("app"));
};


// initial render:
render();