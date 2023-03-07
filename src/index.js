import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Express } from 'express';
import './index.css';
import Header from './layouts/header/Header';
import Hero from './components/hero.js/hero'
import About from './components/sections/about/about';
import Blog from './components/sections/blog/blog';
import Contact from './components/sections/contact/contact';
import Portfolio from './components/sections/portfolio/portfolio';
import reportWebVitals from './reportWebVitals';
import Footer from './layouts/footer/Footer';

const data = fetch('https://api.wazirx.com/api/v2/tickers')
.then(res => res.json())
.then(json => console.log(json));
  // data.header("Access-Control-Allow-Origin", "*");
  // data.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <About />
    <Blog />
    <Portfolio />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
