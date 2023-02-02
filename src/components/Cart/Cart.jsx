import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data = [
        { 
            id: 1,
            img: "https://images.pexels.com/photos/1179284/pexels-photo-1179284.jpeg?",
            title: 'Long Sleeve Graphic T-shirt',
            desc: 'Clean Sleeves',
            isNew:true,
            oldPrice: 19,
            price: 12,
        },

        { 
            id: 2, 
            img:  "https://images.pexels.com/photos/1179283/pexels-photo-1179283.jpeg?",
            title:  'skit',
            desc:  'Skirt',
            isNew:true,
            oldPrice: 19,
            price: 12,
        },

         {
         id:3,
        img: "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?",
        title: 'Aviation College',
        desc: 'Adodo Aviation',
        isNew:true,
        oldPrice: 190,
        price: 12,
    },




    ]

  return (
    <div className='cart'>
        <h1> Your Shopping </h1>
       {data?.map(item=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title} </h1>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className="price"> 1 X ${item.price} </div>
            </div>
            <DeleteOutlinedIcon className="delete"/>
        </div>
       ))}
        <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT/PAYMENT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart