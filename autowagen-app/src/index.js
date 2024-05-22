import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CarListing from './components/CarListing';
import Chevelle from "./bilder/chevelle.jpg"
import GTO from "./bilder/gto.jpg"
import Mustang from "./bilder/Mustang.jpg"
import Dodge from "./bilder/challenger.webp"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <CarListing 
      Name="Ford Mustang" 
      Preis="30000" 
      imageUrl={Mustang}
    />
    <CarListing 
      Name="Dodge Challenger" 
      Preis="35000" 
      imageUrl={Dodge} 
    />
    <CarListing 
      Name="Chevrolet Chevelle" 
      Preis="40000" 
      imageUrl={Chevelle} 
    />
    <CarListing 
      Name="Pontiac GTO" 
      Preis="69000" 
      imageUrl={GTO} 
    />
  </div>
);


