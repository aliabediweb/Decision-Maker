import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        // 'state' to use with modal:
        selectedOption: undefined
    };
    // event handler to use with modal:
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Error: Invalid Input'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Error: Option Already Exists'
        } 
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            } 
        } catch (e) {
            // do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }
    render() {
        const subTitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subTitle={subTitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    // pass 'state.selectedOption' and event handler as props:
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;