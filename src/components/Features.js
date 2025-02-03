import React from "react";
import "./Features.css";

const features = [
  { title: "AI-Powered Tools", desc: "Leverage cutting-edge AI for automation." },
  { title: "Cloud Integration", desc: "Seamless cloud connectivity for efficiency." },
  { title: "Secure & Scalable", desc: "Enterprise-grade security and scalability." }
];

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Our Features</h2>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
