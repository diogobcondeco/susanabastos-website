import React from 'react';
import './App.scss';
import './assets/styles/_colors.scss';
import './assets/styles/_variables.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Footer />
    </div>
  );
}

export default App;
