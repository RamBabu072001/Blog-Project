import React from 'react'
import { AiOutlineAlipayCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className=" footer bg-dark w-100 text-light ">
        <div className=' footer-box d-flex justify-content-evenly'>
          
              <div className='footer-logo '>
                <AiOutlineAlipayCircle size={80}/>
              </div>
              <div className='footer-social'>
                  <h4>Reach Us</h4>
                  <span className=''><FaXTwitter size={20} /></span>
                  <span className=''><FaInstagram size={20}/></span>
                  <span className=''><FaFacebookMessenger size={20} /></span>
                </div>
          
          <div>
            <h4>Links</h4>
            <ul>
              <Link to='/About'><li>About</li></Link>
              <Link to='/Contact'><li>Contact</li></Link>
              <Link to='/Blog'><li>Blogs</li></Link>
            </ul>
          </div>
        <div className=''>
          <h4 className=''>Blogs</h4>
        <div className='footer-links d-flex '>
         
          <div className='footer-ul-1 '>
            <ul className='me-4'>
              <Link to="/posts/categories/Architecture"><li>Architecture</li></Link>
              <Link to="/posts/categories/Sports"><li>Sports</li></Link>
              <Link to="/posts/categories/Anime"><li>Anime</li></Link>
            </ul>
          </div>
          <div className='footer-ul-2 border-start'>
              <ul className='ms-4'>
              <Link to="/posts/categories/Travel"><li>Travel</li></Link>
              <Link to="/posts/categories/Food"><li>Food</li></Link>
              <Link to="/posts/categories/News"><li>News</li></Link>
              </ul>
            </div>
        </div>
        </div>
        </div>
      </div>

    </>

  )
}

export default Footer

