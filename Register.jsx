import React from "react";
// import "../styles.css";

function Register() {
  return (
    <section className="register">
      <h2>Register for Our Services</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Register;
