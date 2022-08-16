import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import {Navbar ,Home,Projects} from './components'
function App() {
  return (
    <Router>
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>

      </Routes>
      </>
    </Router>
  );
}

export default App;
