import React from 'react';

import './common/style.css';
import './common/reset.css';

import Header from './components/Header/Header'
import SliderPage from './components/SliderPage/SliderPage'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
  
     <Header />

     <SliderPage />
     
     <Main />

     <Footer />

    </div>
  );
}

export default App;
