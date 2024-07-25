import React from 'react'
import Posts from '../components/Posts'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
      <div className='Blog bg-dark'>
        <div className='Blog-header bg-dark '>
            <ul>
              <li><Link  to="/posts/categories/Food">Food</Link></li>
              <li><Link to="/posts/categories/Art">Art</Link></li>
              <li><Link to="/posts/categories/Travel">Travel</Link></li>
              <li><Link to="/posts/categories/Architecture">Architecture</Link></li>
              <li><Link to="/posts/categories/Sports">Sports</Link></li>
              <li><Link to="/posts/categories/Nature">Nature</Link></li>
              <li><Link to="/posts/categories/Entertinement">Entertinement</Link></li>
              <li><Link to="/posts/categories/Fitness">Fitness</Link></li>
              
            </ul>

        </div>
        <div className='Blog-body'>
            <Posts />
        </div>
      </div>
    </>
  )
}

export default Blog