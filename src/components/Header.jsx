// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Hi, I'm a Senior Java Developer</h1>
      <p>14+ years in Java | Spring Boot | Kafka | AWS</p>
    </motion.header>
  );
}

export default Header;
