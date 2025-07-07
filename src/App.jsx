
import React from 'react';
// import "../src/commonResource/js/bootstrap.js";
// import "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
import '../src/commonResource/css/bootstrap.css';
import '../src/commonResource/css/styles.css';
import Header from '../src/components/Header/Header';
import AlertSection from './components/AlertSection/AlertSection';
import Section_1 from './components/MainSection/Section_1';
import Section_2 from './components/MainSection/Section_2';
import Section_3 from './components/MainSection/Section_3';
import Section_4 from './components/MainSection/Section_4';
import Section_5 from './components/MainSection/Section_5';
import Section_6 from './components/MainSection/Section_6';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <AlertSection />
      < Section_1/>
      < Section_2/>
      < Section_3/>
      <Section_4 />
      <Section_5 />
      < Section_6/>
      <Footer />
    </>
  );
}

export default App;