import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useReducer } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Hero from './Hero';
import Highlight from './Highlight';
import Testimonial from './Testimonial';
import BookingPage from './Booking';
import About from './About';

function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function timesReducer(state, action) {
  switch (action.type) {
    case "update_time":
      return initializeTimes();
    default:
      return state;
  }
}

function App() {
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  });

  const [availableTimes, updateTimes] = useReducer(timesReducer, [], initializeTimes);

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "guests" ? Number(value) : value,
    }));

    if (id === "date") {
      updateTimes({ type: "update_time", date: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
  }

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
            <Route
              path="/reservations"
              element={
                <BookingPage
                  formData={formData}
                  availableTimes={availableTimes}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  updateTimes={updateTimes}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <footer className="footer"><Footer /></footer>
      </section>
    </Router>
  );
}

export default App;
