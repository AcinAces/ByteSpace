import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import Creators from './pages/Creators';
import NotFound from './pages/NotFound';
import { LoadingProvider } from './context/LoadingContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = React.useState(true);

  React.useEffect(() => {
    setIsAnimating(true);
  }, [location.pathname]);

  return (
    <div
      key={location.pathname}
      className={isAnimating ? 'animate-page-enter' : ''}
      onAnimationEnd={() => setIsAnimating(false)}
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <LoadingProvider>
        <ScrollToTop />
        <AnimatedRoutes />
      </LoadingProvider>
    </Router>
  );
}
