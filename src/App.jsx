// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadilineCards from './components/HeadilineCards';
import Food from './components/Food';
import Category  from './components/Category';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadilineCards />
      <Food />
      <Category />
      <Footer />
    </div>
  )
}

export default App
