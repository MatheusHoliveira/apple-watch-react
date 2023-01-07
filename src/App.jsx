import { useState } from 'react'
import './App.css'

const productOptions = [
  {
    id: 1,
    src: "/watch-1.png",
    price: "5.299",
  },
  {
    id: 2,
    src: "/watch-2.png",
    price: "5.500",
  },
  {
    id: 3,
    src: "/watch-3.png",
    price: "5.400",
  },
  {
    id: 4,
    color: "#000000",
    src: "/watch-4.png",
    price: "5.500",
  },
];

function App() {
  const [img, setImg] = useState('/watch-2.png');
  const [price, setPrice] = useState('5.500$');

  const handleClick = () => {
    setPrice('6.500$');
  }

const selectOption = (option) => {
  setPrice(option.price);
  setImg(option.src);
 
};

const renderProductOptions = () =>{
  return productOptions.map((option) => {
    const newId = `color_picker_${option.id}`;
    return(
      <div key={option.id} id={newId} onClick={() => selectOption(option)}
      className='color-picker-options'></div>
    );
  });
};


  return (
    <main>
    <div className="container">
      <div className="row">
        <div className="col">
          <h6>The Next Dev</h6>
          <h1>
            New<br />
            Series 8<br />
            Apple <span> Watch.</span>
          </h1>
          <p>
            New Apple Watch, a healthy leap ahead with a healthy dose of
            style.
            <br />
            <br />
            Copyright Wazana © All rights reserved.
          </p>
          <div className="info-container">
            <h5 id="price">{price}</h5>
            <div id="color-picker">{renderProductOptions()}</div>
          </div>
          <button onClick={handleClick}>Buy</button>
        </div>
        <div className="col">
          <img id="apple-watch" src={img} alt="Apple Watch" />
        </div>
      </div>
    </div>
  </main>
  )
}

export default App
