import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Forum from './pages/Forum';
import NotFound from './pages/NotFound';
import CropDiagnostics from './pages/CropDiagnostics';
import EducationalResources from './pages/EducationalResources';
import Payment from './pages/Payment';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/marketplace" element={<Marketplace />} />
                        <Route path="/forum" element={<Forum />} />
                        <Route path="/crop-diagnostics" element={<CropDiagnostics />} />
                        <Route path="/educational-resources" element={<EducationalResources />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
