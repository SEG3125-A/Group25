import React from 'react';
import { useNavigate } from 'react-router-dom';
import book1img from '../assets/servetowin.jpg';
import book2img from '../assets/arsenewenger.jpg';
import book3img from '../assets/godfather.jpg';
import book4img from '../assets/goldfinger.jpg';
import { Link } from 'react-router-dom';

 

function ProductList() {
  const Navigate = useNavigate();

  const GoBack = () => {
    Navigate('/');
  };
  return (
    <div className="product-list">
      <h2>Our book selections:</h2>
      <div className="card-container">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book1img} alt="Book 1" />
          <div className="card-body">
            <h3>Serve to Win</h3>
            <p className="card-text">In 2011, Novak Djokovic had what sportswriters called the greatest single season ever by a professional tennis player: He won ten titles, three Grand Slams, and forty-three consecutive matches.</p>
            <p>Author: N.Djokovic </p>
            <p>Price: $25</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book2img} alt="Book 2" />
          <div className="card-body">
            <h3>Arsène Wenger</h3>
            <p className="card-text">Wenger opens up about his life, sharing principles for success on and off the field with lessons on leadership, personal development, and management.</p>
            <p>Author: A.Wenger </p>
            <p>Price: $38</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book3img} alt="Book 3" />
          <div className="card-body">
            <h3>The Godfather</h3>
            <p className="card-text">The Godfather has gone on to become a part of America's national culture, as well as a trilogy of landmark motion pictures.</p>
            <p>Author: M.Puzo </p>
            <p>Price: $35</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={book4img} alt="Book 3" />
          <div className="card-body">
            <h3>Goldfinger</h3>
            <p className="card-text">Who is Auric Goldfinger? The Bank of England wants to know and they're also curious to find out what he's done with the huge stock of gold he's been collecting since the war. James Bond is put on the trail.</p>
            <p>Author: I.Fleming </p>
            <p>Price: $15</p>
          </div>
        </div>
        {/* Add more card components here */}
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={GoBack}>Go back</button>
      </div>
    </div>
  );
}

export default ProductList;
