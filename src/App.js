import React, { Component } from 'react';

import StackContext from './stacks/StackContext';
import AppNavbar from './components/AppNavBar';

import { Provider } from 'react-redux';
import Store from './state/store';

class App extends Component {
  render() {
    return (
      <Provider store={Store} >
        <div className="App">
          <AppNavbar />
          <main role="main" className="container-fluent mt-5">
            <StackContext />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
