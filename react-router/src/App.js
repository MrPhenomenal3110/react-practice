import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Card from './components/Card';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;