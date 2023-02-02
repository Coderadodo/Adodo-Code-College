import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'



const categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
          
            <img src="https://images.pexels.com/photos/1179283/pexels-photo-1179283.jpeg?" alt="" />
               
                <button>
                    <Link className="link" to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src ="https://images.pexels.com/photos/1179284/pexels-photo-1179284.jpeg?" alt=""/>
           
         
                <button>
                    <Link to="/products/2" className='link'>men</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/1179283/pexels-photo-1179283.jpeg?" alt="" />
                <button>
                    <Link to="/products/3" className='link'>Women</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/1179295/pexels-photo-1179295.jpeg?" alt="" />
                    
                <button>
                    <Link to="/products/4" className='link'>guys</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/1179283/pexels-photo-1179283.jpeg?" alt="" />
                
                <button>
                    <Link to="/products/5" className='link'>ceo</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?" alt="" />
           
                <button>
                    <Link to="/products/6" className='link'>v.i.p class</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default categories