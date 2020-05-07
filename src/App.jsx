import React from 'react';
import './assets/styles/main.scss';
import { Provider } from 'react-redux';
import store from './store';
import Select from './components/Select/Select';
import Detail from './components/Detail/Detail';

const App = () => {
  return (
    <Provider store={store}>
      <div className="main-container">
        <Select />
        <Detail />
      </div>
    </Provider>
  );
}

export default App;