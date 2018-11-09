import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={e => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lasers: '',
      instruction: 'Activate'
    }

    //  Important: Changes to view during events require event binding
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.toggleLasers();
  }

  toggleLasers() {
    this.setState(state => ({
      lasers: state.lasers ? '' : 'pew pew!',
      instruction: state.instruction === 'Activate' ? 'Deactivate' : 'Activate'
    }));
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.lasers}
          <img src={logo} className="App-logo" alt="logo" />
          <button type="button" onClick={() => this.handleClick()}>
            {`${this.state.instruction} lasers`}
          </button>
          <LoggingButton />
        </header>
      </div>
    );
  }
}

export default App;
