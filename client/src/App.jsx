import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// Pages pour chaque route
import Dashboard from './pages/Dashboard'; // Remplace la version inline par un composant importé
import Calendrier from './pages/Calendrier'; // Ajoute les pages si elles sont déjà créées
import Evenements from './pages/Evenements';
import Programme from './pages/Programme';
import Chat from './pages/Chat';
import Parametres from './pages/Parametres';

const App = () => {
    return (
        <Router>
            <div className="flex rounded-2xl">
                {/* Barre latérale */}
                <Sidebar />
                {/* Contenu principal */}
                <div className="flex-1 bg-gray-100 rounded-2xl">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/calendrier" element={<Calendrier />} />
                        <Route path="/evenements" element={<Evenements />} />
                        <Route path="/programme" element={<Programme />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/parametres" element={<Parametres />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
