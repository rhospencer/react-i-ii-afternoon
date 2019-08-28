import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js'
import Body from './components/Body.js'
// import Control from './components/Control.js'

class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return(
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="bodyHolder">
          <Body />
        </div>
        {/* <Control /> */}

      </div>
    )
  }
}


export default App;
