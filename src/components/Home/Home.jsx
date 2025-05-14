import React from 'react';
import Banner from '../Banner';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Normal from '../Normal';
import Slideshow from '../Slideshow';
import Why from '../Why';

function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <Why />
    <Normal />
    <Slideshow />
    <Footer />
    </>
  )
}

export default Home