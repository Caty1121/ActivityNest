import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Community from './pages/Community';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Library from './pages/Library';
import Subscriptions from './pages/Subscriptions';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/header" element={<Header />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/library" element={<Library />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
