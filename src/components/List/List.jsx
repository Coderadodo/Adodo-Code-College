import React from 'react'
import Card from './../Card/Card';
import './List.scss'

const List = () => {
    const data = [
       
        { 
            id: 1,
            img: "https://images.pexels.com/photos/1179284/pexels-photo-1179284.jpeg?",
            title: 'Long Sleeve Graphic T-shirt',
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1179286/pexels-photo-1179286.jpeg?",
            title: 'Skirt',
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1179291/pexels-photo-1179291.jpeg?",
            title: 'Pant',
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        
        {
            id: 4,
            img: "https://images.pexels.com/photos/1179290/pexels-photo-1179290.jpeg?",

            title: 'Jacket',
            isNew:true,
            oldPrice: 19,
            price: 12,
     },
    ]
  return (
    <div className='list'>{data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}
    </div> 
  )
    
}

export default List