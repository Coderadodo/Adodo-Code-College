import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import Victor from './../../components/Victor/Victor';
import Categories from './../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type='featured'/>
      <Categories/>
      <FeaturedProducts type='trending'/>
      <Contact/>
     
      <Victor type = 'arrival'/>
    </div>
  )
}

export default Home