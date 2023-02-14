import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import PeopleDetail from './pages/PeopleDetail';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
          <div>
            <Header/>
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/peopleDetail' element={<PeopleDetail />}/>
              <Route path='/About' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
            </Routes>
            <Footer />
          </div>
      </Router>
    </>
  );
}

export default App;
