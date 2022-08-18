import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './front/screens/HomeScreen/HomeScreen';
import Register from './front/screens/Register/Register';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
);
