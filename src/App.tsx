import React from 'react';
import BaseTable from './components/BaseTable';
import Header from './components/Header';
import { createStore } from 'redux';
import rootReducer from './reducers';
import cors from 'cors';

import './App.css';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <BaseTable></BaseTable>
      </header>
    </div>
  );
}

<BaseTable />
        
export default App;
