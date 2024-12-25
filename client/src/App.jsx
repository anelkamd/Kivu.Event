import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Events from './pages/Events';

function App() {
    return (
        <Router>
            <div className="font-sans text-gray-800">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
