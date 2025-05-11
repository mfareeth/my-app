// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>
        I'm a passionate backend engineer with over 14 years of experience in enterprise Java applications,
        cloud infrastructure on AWS, and event-driven systems using Apache Kafka.
      </p>
    </motion.section>
  );
}

export default About;
