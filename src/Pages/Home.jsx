import React from 'react'
import image1 from '../assets/images/Home1.jpg';
import image2 from '../assets/images/Home2.jpg';
import { IoFastFood } from "react-icons/io5";
import { GiMountaintop } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";


function Home() {
  return (
    <div>
      <div className='Home-Box'>
          <div className='Home-Box-1 bg-dark' ></div>
          
            <div className='Home-text'>
              
              <h1 className=''>Welcome To My Blog</h1>
              <h4>Read the most Intresting Blogs</h4>
              
            
            </div>
      </div>
      <div className='Featured d-flex justify-content-center bg-dark'>
            <h1 className='my-4'>Featured In |</h1>
            <div className='Featured-icons'>
            <IoFastFood size={50}/>
            <h2>Food Blog</h2>
            </div>
            <div className='Featured-icons'>
            <GiMountaintop size={50}/>
            <h2>Travel Blog</h2>
            </div>
            <div className='Featured-icons'>
            <FaPaintBrush size={50}/>
            <h2>Art Blog</h2>
            </div>
      </div>
      <div className='Home-content bg-dark'>
        <div className='Home-content-header py-4'>
          <h1> Blogs</h1>
          </div>
        <div className='Home-content-1'>
              <div className='Home-content-1-image'>
                <img src= {image1}></img>
              </div>
              <div className='Home-content-1-text'>
                <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam eos magnam sint natus? Nisi culpa blanditiis repudiandae! Et, eaque magni. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam vero odit ad, officiis molestias! Mollitia animi nostrum voluptatum, minima architecto ea repellat natus autem a qui. Doloribus, cum repellat.</h5>
              </div>
        </div>
        <div className='Home-content-2'>
              
              <div className='Home-content-2-text'>
                <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam eos magnam sint natus? Nisi culpa blanditiis repudiandae! Et, eaque magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit enim impedit, praesentium et placeat natus similique quas, odit iure repellendus magnam quasi soluta eligendi, sunt libero magni voluptatum incidunt id?</h5>
              </div>
              <div className='Home-content-2-image'>
                <img src= {image2}></img>
              </div>
        </div>

      </div>
          
      </div>
      
    
  )
}

export default Home