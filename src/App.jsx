import React from "react";
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components'; 

import './app.css'; 

const App = () => {
    return (
        <div className="app">
        <Header />
        <Routes>
            <Route path="/" element={<Pages.HomePage />} />
            <Route path="/profiles" element={<Pages.ProfilesPage />} />
            <Route path="/profiles/:id" element={<Pages.ProfilePage />} />
            <Route path="/search" element={<Pages.SearchPage />} />
            <Route path="*" element={<Pages.NotFoundPage />} />
        </Routes>
        </div>
    );
    }

export default App;
