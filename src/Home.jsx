import React, { useState } from 'react';
import './Home.css';
import { Link ,useNavigate} from 'react-router-dom';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const nav1 = useNavigate();
  function changepage()
  {
    nav1('/mainpage')
  }

  return (
    <div>
      

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Schedule Meetings Effortlessly</h1>
          <p>Manage your meetings with ease, sync with your calendar, and never miss an appointment.</p>
          <button className="cta-button" onClick={changepage}>Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      {/* <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Easy Scheduling</h3>
            <p>Set up meetings in just a few clicks.</p>
          </div>
          <div className="feature-item">
            <h3>Calendar Integration</h3>
            <p>Sync your meetings with Google Calendar, Outlook, and more.</p>
          </div>
          <div className="feature-item">
            <h3>Automatic Reminders</h3>
            <p>Receive reminders before your meetings.</p>
          </div>
        </div>
      </section> */}

      {/* How It Works Section */}
      {/* <section id="how-it-works" className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step-item">
            <h3>Step 1</h3>
            <p>Create an account or log in to your existing account.</p>
          </div>
          <div className="step-item">
            <h3>Step 2</h3>
            <p>Schedule a meeting by choosing the date, time, and participants.</p>
          </div>
          <div className="step-item">
            <h3>Step 3</h3>
            <p>Send invites and receive confirmations instantly.</p>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"This tool has made my scheduling so much easier!" - John Doe</p>
          </div>
          <div className="testimonial-item">
            <p>"I love the calendar integration feature." - Jane Smith</p>
          </div>
          <div className="testimonial-item">
            <p>"Automatic reminders ensure I never miss a meeting." - Alex Johnson</p>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form id="contactForm">
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section> */}

      {/* Modal */}
      {/* {isModalOpen && (
        <div id="modal" className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>Get Started</h2>
            <p>Sign up now to start scheduling your meetings effortlessly!</p>
            <Link to="/signup" className="cta-button" onClick={changepage}>Sign Up</Link>
          </div>
        </div>
      )} */}

      {/* Footer */}
      {/* <footer className="footer">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-media">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
        <p>&copy; 2024 Meeting Scheduler. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;