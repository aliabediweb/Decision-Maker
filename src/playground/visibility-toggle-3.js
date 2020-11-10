// Visibility Toggle with 'state'



// create class:
class VisibilityToggle extends React.Component {
    // constructor:
    constructor(props) {
        super(props);
        // bind 'this' keyword to use in method:
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        // set initial 'state.visibility' to false:
        this.state = {
            visibility: false,
        }
    }
    // event handler function (method):
    handleToggleVisibility() {
        // get 'prevState' value:
        this.setState((prevState) => {
            return {
                // flip boolean value:
                visibility: !prevState.visibility
            };
        });
    }
    // render method (must have for every class):
    render() {
        return (
            <div>
                {/* header */}
                <h1>Visibility Toggle</h1>
                {/* button with event listener */}
                <button onClick={this.handleToggleVisibility}>
                    {/* change button text based on 'state.visibility' boolean value */}
                    {this.state.visibility ? "HIDE" : "SHOW"}
                </button>
                {/* display text using 'logical &&' operator */}
                {this.state.visibility && (
                    <div>
                        <p>show/hide text</p>
                    </div>
                )}
            </div>
        );
    }
}



ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));