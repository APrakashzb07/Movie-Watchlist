import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Add } from './components/Add'; 
import './lib/font-awesome/css/all.min.css';
import './App.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Watchlist/>} />
        
        <Route path='/add' element={<Add/>} />
      </Routes>
    </Router>
    
    </GlobalProvider>
    
  );
}

export default App;
