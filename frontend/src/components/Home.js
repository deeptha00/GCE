import React from 'react';
import Section from './Section';
import Header from './Header';
import Carousel from './Carousel';
import Footer from './Footer';
import Sponsors from './Sponsors';

function Home() {
  return (
    <div className="bg-white">
      <Header/>
      <Carousel/>
      <Section title="Section 1 Title">
        <p className="p-4 bg-gray-100">Content for section 1.</p>
      </Section>
      <Section title="Section 2 Title">
        <p className="p-4 bg-gray-100">Content for section 2.</p>
      </Section>
      {/* Add more sections as needed */}
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default Home;
