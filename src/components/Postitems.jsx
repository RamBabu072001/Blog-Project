import React from 'react'
import {Link} from 'react-router-dom'
import Blogauthor from './Blogauthor'
import { RiAdminFill } from "react-icons/ri";

function Postitems(props) {
  const shortDesc = props.desc.length>110 ? props.desc.substr(0,110)+"...":props.desc;

  return (
    <>
        
        <div className="card my-4">
    <Link to={`/posts/${props.postId}`}>
  <img src={props.Thumbnail} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{shortDesc}</p>
    <div className='card-author d-flex justify-content-between'>
        <div className='d-flex gap-2'><RiAdminFill size={20}/><p>Admin</p></div>
        <Link to={`/posts/categories/${props.Category}`} className="btn btn-success">{props.Category}</Link>
    </div>
    <Link to={`/posts/${props.postId}`} className="btn btn-primary text-white">Read Post</Link>
  </div>
  </Link>
  
</div>

        
    </>
  )
}

export default Postitems