import React from 'react';
import Header from './Header';
import Footer from './Footer';

import './App.css';
import ListContainer from './ListContainer';
import ListInput from './ListInput';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <main className='main-content'>
      <ListInput />
      <ListContainer/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
