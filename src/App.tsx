import React from 'react';
import BaseTable from './components/BaseTable';
import ButtonBar from './components/ButtonBar';
import Header from './components/Header';
import { createStore } from 'redux';
import cors from 'cors';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
{/*        <ButtonBar></ButtonBar>*/}
        <BaseTable></BaseTable>
      </header>
    </div>
  );
}

<BaseTable />
        
export default App;
