

import Header from './Components/Header/Header';

import {useState} from 'react';
import Home from './Components/Home/Home';




function App() {
  const[count , setCount]=useState(0);
  
  return (

    <div >

      <Header count={count} setCount={setCount}></Header>

      
    </div>
  );
}

export default App;
