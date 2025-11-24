import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import GeminiAssistant from './pages/GeminiAssistant';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Settings from './pages/Settings';
import Help from './pages/Help';

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-background min-h-screen">
        <div className="max-w-md mx-auto bg-white min-h-screen relative shadow-2xl overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings/:type" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/ai-chat" element={<GeminiAssistant />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Navbar />
        </div>
      </div>
    </Router>
  );
};

export default App;