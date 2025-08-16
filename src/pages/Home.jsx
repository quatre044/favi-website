import React from "react";
import "./Landing.css";

const Home = () => (
  <main className="landing">
    <nav className="navbar">
      <div className="logo">FAVI</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/product">Products</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/admin">Admin</a></li>
      </ul>
    </nav>
    <section className="hero">
      <h1>Welcome to First-AVPR Venture, Inc.</h1>
      <p>Empowering solutions for modern businesses. Explore our services and products designed for excellence.</p>
      <a className="cta" href="/services">Get Started</a>
    </section>
  </main>
);

export default Home;