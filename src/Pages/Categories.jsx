import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { RiAdminFill } from "react-icons/ri";



function Categories() {
    const { Category } = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        let items = localStorage.getItem('posts')
        if (items) {
            
            let todo = JSON.parse(localStorage.getItem('posts'))
            setItems(todo);
        }
    }, []);
    console.log(items)
    console.log(items.length)
    return (
        <div className='Search-body bg-dark p-4'>
            <div > <h3 className='text-white'>Category: {Category} </h3></div>
            <div className='d-flex flex-warp justify-contents-evenly gap-4'>
            {
                items.map(item => {
                    if (item.Category === Category) {
                        return (
                        
                                
                                    <div key={item.id} className="card my-4 ">
                                        <Link to={`/posts/${item.postId}`}>
                                            <img src={item.Thumbnail} className="card-img-top" alt="..." />
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
    
                            
                            

                        )
                    }
                })
            }
            </div>

        </div>
    )
}

export default Categories