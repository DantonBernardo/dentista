import React from 'react';

import Header from '../../components/Header';

import About from '../../components/About';
import Feedback from '../../components/Feedback';
import ServicesProvided from '../../components/ServicesProvided';
import Contact from '../../components/Contact';


import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />

      <About />
      <ServicesProvided />
      <Feedback />
      <Contact />

      <Footer />
    </div>
  );
}
