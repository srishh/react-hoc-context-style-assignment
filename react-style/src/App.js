import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import CarouselView from './Components/CarouselView';
import DealCardViewPort from './Components/DealCardViewPort';
import BrandInFocusViewPort from './Components/BrandInFocusViewPort';

library.add(fas)

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
       <Header/>       
       <CarouselView/>
       <DealCardViewPort/>

        <h2>BRANDS IN FOCUS</h2>
        <p>Show some brand love</p>
        
       <BrandInFocusViewPort/>
      </div>
    );
  }
}

export default App;
