import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <img src={"logo"} alt="ViziLume" className="logo" />
        <div className="menu-icon">&#9776;</div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h4>AWESOME</h4>
        <h1>We are Startup Creative ViziLume</h1>
        <p>
          Carefully crafted after analyzing the needs of different industries
          and the design achieves a great balance between purpose & presentation.
        </p>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
        <img src={"https://www.bespokesoftwaredevelopment.com/blog/wp-content/uploads/2023/01/software-development-company2-905x509.jpg"} alt="Illustration" className="hero-image" />
      </header>

      {/* Product Features */}
      <section className="features">
        <h2>Product Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <i className="icon">🎨</i>
            <h3>Digital Design</h3>
            <p>Some quick example text to build on the card.</p>
          </div>
          <div className="feature-item">
            <i className="icon">🌈</i>
            <h3>Unlimited Colors</h3>
            <p>Credibly brand standard compliant user experience.</p>
          </div>
          <div className="feature-item">
            <i className="icon">💡</i>
            <h3>Strategy Solutions</h3>
            <p>A large ocean of knowledge and ideas.</p>
          </div>
          <div className="feature-item">
            <i className="icon">🛠</i>
            <h3>Awesome Support</h3>
            <p>All necessary support making generator.</p>
          </div>
          <div className="feature-item">
            <i className="icon">🖥</i>
            <h3>Truly Multipurpose</h3>
            <p>For those who love creative digital experiences.</p>
          </div>
          <div className="feature-item">
            <i className="icon">⚙️</i>
            <h3>Easy to Customize</h3>
            <p>Flexible and adaptable to your needs.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works?</h2>
        <p>
          It is a long established fact that a reader will be distracted by readable content.
        </p>
        <div className="steps">
          <div className="step">
            <img src={"https://img.freepik.com/premium-vector/two-young-woman-working-office-girls-sitting-desk-with-book-laptop-businesswoman-is-sitting-desk-working-laptop_506530-2295.jpg"} alt="Step 1" />
            <div className="step-content">
              <span className="dot"></span>
              <h3>Tell us your idea</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </p>
            </div>
          </div>
          <div className="step">
            <img src={"https://img.freepik.com/premium-vector/management-business-illustration_990672-232.jpg"} alt="Step 2" />
            <div className="step-content">
              <span className="dot"></span>
              <h3>Debut with users</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>
          <div className="step">
            <img src={"https://img.freepik.com/premium-vector/flat-illustration-vector-people-having-discussion_1150217-559.jpg?w=360"} alt="Step 3" />
            <div className="step-content">
              <span className="dot"></span>
              <h3>Launch and grow</h3>
              <p>
                A perfect launch with complete scalability and optimized workflow.
              </p>
            </div>
          </div>
          {/* New Research and Develop Section */}
          <div className="step">
            <img src={"https://img.freepik.com/premium-vector/woman-interview-talking-with-hr-process-talking-with-candidates_776652-4262.jpg"} alt="Step 5" />
            <div className="step-content">
              <span className="dot"></span>
              <h3>Research and Develop</h3>
              <p>
                In depth research and develop.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="pricing">
        <h2>Our Pricing</h2>
        <p>It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Basic</h3>
            <h2>$299</h2>
            <ul>
              <li>✅ Simple Website</li>
              <li>✅ Responsive Design</li>
              <li>❌ Custom Features</li>
              <li>✅ 5 Pages</li>
              <li>✅ Hidden Fees: No</li>
            </ul>
            <button>Join Now</button>
          </div>
          <div className="pricing-card advanced">
            <h3>Advanced</h3>
            <h2>$599</h2>
            <span className="sale-badge">20% Sale</span>
            <ul>
              <li>✅ Advanced Website/App</li>
              <li>✅ SEO Optimization</li>
              <li>✅ 10 Pages</li>
              <li>✅ Basic Animations</li>
              <li>✅ Hidden Fees: No</li>
            </ul>
            <button>Join Now</button>
          </div>
          <div className="pricing-card">
            <h3>Professional</h3>
            <h2>$999</h2>
            <ul>
              <li>✅ Custom Website/App</li>
              <li>✅ UI/UX Design</li>
              <li>✅ Unlimited Pages</li>
              <li>✅ Advanced Animations</li>
              <li>✅ Hidden Fees: No</li>
            </ul>
            <button>Join Now</button>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="faq-section">
        <h2>How can we Help you?</h2>
        <p>It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
        <div className="faq-list">
          <div className="faq-item">
            <span className="faq-icon">?</span>
            <div>
              <h3>Design Your FAQ Page?</h3>
              <p>
                If your FAQ page consists of multiple pages, then one critical element you'll need to consider is your navigation bar. 
                If your search bar is tricky to use or doesn't yield desired results, customers may struggle.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <span className="faq-icon">?</span>
            <div>
              <h3>Monitor the FAQ Page's Performance?</h3>
              <p>
                In this detailed guide, we’re going to dive deep into the whole concept of FAQs. 
                To discover their main purpose and to find out how they can help generate more sales and leads for your business.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <span className="faq-icon">?</span>
            <div>
              <h3>Why you should make an FAQ page?</h3>
              <p>
                Every business and product website comes with a set of default pages like an “About” page, “Contact” page, 
                “Privacy Policy” page, and more. A FAQ page is one of the few must-have pages on this list.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <span className="faq-icon">?</span>
            <div>
              <h3>Regularly update each page?</h3>
              <p>
                Most online support teams spend hours of their valuable time every day answering these general questions. 
                While it could’ve been easily avoided by placing a FAQs section on the website.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
        <div className="contact-details">
          <p>📧 vizilume@gmail.com</p>
          <p>🌐 www.vizilume.com</p>
          <p>📞 +245 1234 5678</p>
          <p>⏰ 9:00 AM - 6:00 PM</p>
          <p>📍 Greater Bengaluru.</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Enter your name*" />
          <input type="email" placeholder="Enter your email*" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Enter your message*"></textarea>
          <button>Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-icons">
          <span>🔵Linkedin: ViziLume</span>
          <span>🔵Instagram: ViziLume-India</span>
          {/* <span>🔵</span>
          <span>🔵</span> */}
        </div>
        <div className="footer-links">
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
        <p>2025 © ViziLume - All Rights Reserved</p>
      </footer>
    </div>   
  );
};

export default LandingPage;
