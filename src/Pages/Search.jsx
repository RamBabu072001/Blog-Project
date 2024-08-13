import React ,{useState , useEffect} from 'react'
import {DUMMY_POSTS} from '../components/Data'
import { Link } from 'react-router-dom'
import { RiAdminFill } from "react-icons/ri";

function Search() {
  const queryParams = new URLSearchParams(window.location.search)
  const term = queryParams.get("Searchv")

  const [filtered , setFiltered] = useState([])  

  

useEffect(() => {
    let items = localStorage.getItem('posts')
    let filt = [];
    if (items) {
        
        let todo = JSON.parse(localStorage.getItem('posts'))
        todo.map(item=>{
          if(item.title === term)
          {
            filt.push(item)
            
          }
        })
    }
    setFiltered(filt)
}, []);
console.log(filtered)
console.log(filtered.length)

  return (
    <>
      <div className='Search-body bg-dark '>
            <div className=''> <h3 className='text-white'>Category: {term} </h3></div>
            <div className=' d-flex flex-warp justify-contents-evenly gap-4'>
            {
              filtered.length >0 ? filtered.map(item=>{ 
                return(
                  <div className="card my-4 ">
                                        <Link to={`/posts/${item.postId}`}>
                                            <img src={item.Thumbnail} class="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">{item.desc.length > 100 ? item.desc.substr(0, 100) + '...' : item.desc}</p>
                                                <div className='card-author d-flex justify-content-between'>
                                                    <div className='d-flex '><RiAdminFill size={20} /><p>Admin</p></div>
                                                    <Link to={`/posts/categories/${item.Category}`} className="btn btn-success">{item.Category}</Link>
                                                </div>
                                                <Link to={`/posts/${item.postId}`} className="btn btn-primary text-white">Read Post</Link>
                                            </div>
                                        </Link>

                                    </div>
              )}): <div className='text-white'><h2>item not found</h2></div>
            }
              
    
            </div>

        </div>
    
    </>
  )
}

export default Search