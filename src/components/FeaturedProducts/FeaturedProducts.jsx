//import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"
//import axios from 'axios'




const FeaturedProducts = ({type}) => {
      
    const data = [
      
       { 
        id: 1,
        img: "https://images.pexels.com/photos/1179284/pexels-photo-1179284.jpeg?",
        image2: "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?",
        title: 'Long Sleeve Graphic T-shirt',
        isNew:true,
        oldPrice: 19,
        price: 12,
    },
    { 
        id: 2, 
        img:  "https://images.pexels.com/photos/1179283/pexels-photo-1179283.jpeg?",
        title:  'skit',
        isNew:true,
        oldPrice: 19,
        price: 12,
    },
    { 
        id: 3, 
        img: "https://images.pexels.com/photos/1179295/pexels-photo-1179295.jpeg?",
        title:  'pant',
        isNew:true,
        oldPrice: 19,
        price: 12,
    },
    { 
        id: 4, 
        img:  "https://images.pexels.com/photos/1179283/pexels-photo-1179283.jpeg?",
        title:  'jacket',
        isNew:true,
        oldPrice: 19,
        price: 12,
    },


        /*
        "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?",
        "https://images.pexels.com/photos/1179283/pexels-photo-1179283.jpeg?",
        "https://images.pexels.com/photos/1179284/pexels-photo-1179284.jpeg?",
    
       
       
       
        {
            id: 1,
            img: 'src/image1.jpg',
            img2:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?",
            title: 'Pant',
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        
       
        
        {
            id: 2,
            img: 'img/image1.jpg',
         
            title: 'Long Sleeve Graphic T-shirt',
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: 'img/image1.jpg',
        
            title: 'Long Sleeve Graphic T-shirt',
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: 'img/image3.jpg',
    
            title: 'Long Sleeve Graphic T-shirt',
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        
        */
    ]

   // const [data, setData] = useState([])

   // useEffect(() => {
       // const fetchData = async ()=>{
          //  try {
           //    const res = await axios.get(process.env.REACT_APP_API_URL +'/products', {
           //         headers:{Authorization: "bearer"+process.env.REACT_APP_API_TOKEN,},
          //      })
             //    setData(res.data.data)
          //  } catch (error) {
           //     console.log()
          //  }
   //   }
    //    fetchData()
  // },[])
    
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Totam repellat quos aperiam eligendi veniam maiores, 
                 reiciendis obcaecati, sequi repudiandae esse et aut beatae 
                 sapiente magni. Architecto possimus velit nam iusto.
            </p> 
        </div>
        <div className="bottom">
            {data.map(item=>(
             <Card item={item} key={item.id} />
            ))}
        </div>
        
    </div>
  )
}

export default FeaturedProducts


















