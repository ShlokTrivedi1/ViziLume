import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles.css";

function Pricing() {
  return (
    <>
      <Navbar />
      <section className="pricing">
        <h2>Our Pricing Plans</h2>
        <p>Choose a plan that fits your needs.</p>
        
        <div className="pricing-container">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p>Perfect for small businesses</p>
            <h2>$299</h2>
            <ul>
              <li>1-Page Website</li>
              <li>Basic SEO</li>
              <li>Mobile Responsive</li>
            </ul>
            <a href="/register" className="cta-btn">Get Started</a>
          </div>

          <div className="pricing-card popular">
            <h3>Standard</h3>
            <p>Great for growing businesses</p>
            <h2>$599</h2>
            <ul>
              <li>Up to 5 Pages</li>
              <li>SEO Optimization</li>
              <li>Custom Design</li>
              <li>Mobile Friendly</li>
            </ul>
            <a href="/register" className="cta-btn">Get Started</a>
          </div>

          <div className="pricing-card">
            <h3>Premium</h3>
            <p>For enterprises & custom solutions</p>
            <h2>$999</h2>
            <ul>
              <li>Unlimited Pages</li>
              <li>Advanced SEO & Analytics</li>
              <li>UI/UX Design</li>
              <li>App Integration</li>
            </ul>
            <a href="/register" className="cta-btn">Get Started</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Pricing;
