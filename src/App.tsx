import React, { useState} from 'react';
import Header from './Header';
import Footer from './Footer';

import './App.css';
import ListContainer from './ListContainer';
import ListInput from './ListInput';


const App: React.FC = () => {

  const [ promise, setPromise ] = useState('')

  return (
    <div className="App">
      <Header/>
      <main className='main-content'>
      <ListInput setPromise={setPromise}/>
      <ListContainer/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
