import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log("The link was clicked!");
    }

    return (
        <a href="https://google.com" onClick={handleClick}>
            Click Me
        </a>
    )
}

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        
        //  reference the current state in callback parameter
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {

        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )

    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
