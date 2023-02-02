import React from 'react'
import { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import BalanceIcon from "@mui/icons-material/Balance";






const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?",
    "https://images.pexels.com/photos/1179283/pexels-photo-1179283.jpeg?",
    "https://images.pexels.com/photos/1179284/pexels-photo-1179284.jpeg?",
    "https://images.pexels.com/photos/1179295/pexels-photo-1179295.jpeg?",
    
  ]

  return (
    <div className='product'>
    <div className="left">
      <div className="images">
        <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
        <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        <img src={images[2]} alt="" onClick={e=>setSelectedImg(2)}/>
        <img src={images[3]} alt="" onClick={e=>setSelectedImg(3)}/>
        <img src={images[4]} alt="" onClick={e=>setSelectedImg(4)}/>
    </div>
      <div className="mainImg">
        <img src={images[selectedImg]} alt="" />
      </div>
      </div>
    <div className="right">
      <h3>Title</h3>
      <span className='price'>$199</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Illo distinctio hic praesentium repellat nobis sapiente, 
         reprehenderit est alias molestias omnis.
      </p>
      <div className="quantity">
        <button onClick={()=>setQuantity(prev=>prev===1? 1 : prev -1 )}>-</button>
        {quantity}
        <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        <h5>Number of persons</h5>
      </div>
    <button className="add">
    <AddShoppingCartIcon/> ADD TO CART
    </button>
    <div className="link">
      <div className="item">
      <FavoriteBorderIcon/> ADD TO WISH LIST
      </div>
      <div className="item">
      <BalanceIcon/>ADD TO COMPARE
      </div>
    </div>
        <div className="info">
          <span>Vendor: Adodo</span>
          <span>Civilization</span>
          <span>Industrialization</span>
          <span> Aviation Software Developer</span>
        </div>
        <hr/>
        <div className="details">
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
    </div>
    </div>
  )
}

export default Product