import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Hero from './Hero';
import Highlight from './Highlight';
import Testimonial from './Testimonial';
import About from './About';

function App() {
  return (
    <Router>
      <section className="container">
        <section className="heading">
          <header className="header"><Header /></header>
          <nav className="nav"><Nav /></nav>
        </section>

        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Highlight />
                  <Testimonial />
                  <About />
                </>
              }
            />

            <Route path="/hero" element={<Hero />} />
            <Route path="/highlight" element={<Highlight />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <footer className="footer"><Footer /></footer>
      </section>
    </Router>
  );
}

export default App;