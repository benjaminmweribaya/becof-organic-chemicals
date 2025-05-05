import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Careers from './pages/Careers'; 
import Consultation from './pages/Consultation'; 
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/consultation" element={<Consultation />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
