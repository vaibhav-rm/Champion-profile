import React from "react";
import Navbar from "../Components/Navbar"; // Assuming you have a separate Navbar component now
import "./about.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <header className="about-header">
          <h1>About Us</h1>
        </header>
        <main className="about-main">
          <section className="about-content">
            <p>
              Welcome to the Champions Profile, your ultimate destination to explore the inspiring stories and achievements of the world's greatest sports personalities.
            </p>
            <p>
              Our mission is to celebrate the legends of sports by showcasing their journeys, victories, and the indomitable spirit that makes them champions. Whether you're a fan of cricket, football, tennis, athletics, or any other sport, you'll find a wealth of information and inspiration here.
            </p>
            <p>
              Dive deep into the profiles of iconic figures like Virat Kohli, Lionel Messi, Usain Bolt, and many more. Learn about their careers, milestones, and the impact they've made both on and off the field.
            </p>
            <p>
              Join us in honoring these extraordinary individuals who have not only excelled in their respective sports but have also inspired millions around the globe.
            </p>
            <p>
              Thank you for visiting, and we hope you enjoy exploring the world of sports champions with us.
            </p>
          </section>
        </main>
        <footer className="about-footer">
          <p>&copy; 2024 Champions Profile</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
