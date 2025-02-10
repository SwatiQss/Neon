import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/global.scss";
import Footer from './components/Footer';
import Feedback from './pages/Feedback/Feedback';
import App from './App';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <App />

  </React.StrictMode>
);

