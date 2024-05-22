import '../styles/CarListing.css';

function CarListing({Name,Preis, imageUrl}){
    return ( 
    <div className="car-listing">
      <img 
        src={imageUrl} 
        alt={Name}
        className='car-image'
      />
      
      <h2>Marke: {Name}</h2>
      <h2>Preis: ${Preis}  </h2>
      <div className="grey-border"/>
      <div className="white-border"/>
    </div>
  );
}

  export default CarListing;