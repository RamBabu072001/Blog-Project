import React, { useEffect, useState } from 'react'
import Thumbnail from '../assets/images/blog2.jpg'
import { RiAdminFill } from "react-icons/ri";
import { useParams } from 'react-router-dom'


function PostDetail() {
    const {id}=useParams()
    const [items , setItems] = useState([])

    useEffect(()=>{
        let items = localStorage.getItem('posts')
        if(items){
          console.log(items)
          let todo = JSON.parse(localStorage.getItem('posts'))
          setItems(todo);
        }
      },[])
  return (
    <>
        {items.map(item=>{
            if(item.id === id){
        return(
        <div key={id} className='postDetail-body  '>
            
            <div className='post-detail-container bg-dark'>
            <div className='post-title text-white mb-4'><h5>Title: <u>{item.title}</u></h5></div>
            <div className='d-flex text-white gap-3'><RiAdminFill size={20}/><p>Admin</p> <p>Date: 01/01/2024</p></div>
            
            <div className='post-detail-image'>
                <img src={item.Thumbnail}></img>
            </div>
            
            <div className='post-desc my-4 text-white'>
                <p>{item.desc}</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ea sequi facere minus odio debitis quod ad, omnis ipsa repellendus quis sed fuga totam enim ipsam! Temporibus, nemo, ullam nesciunt quia laboriosam officiis illum, aperiam nisi dolores laudantium amet debitis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque accusantium facere incidunt et enim molestias ex praesentium placeat amet rem iusto ullam, neque in blanditiis rerum? Unde magnam, odit, fugiat sequi dignissimos maiores vitae atque quo laboriosam modi repellat eos quaerat, autem quasi tenetur quidem sunt! Laudantium quia reprehenderit quis aliquid ab corrupti eum voluptatem facere, quasi illo excepturi officia, nesciunt pariatur temporibus eos expedita accusamus et nihil totam, sint odit error praesentium autem. Neque quis quisquam cupiditate beatae suscipit.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem dolorum sit magni dolore dolorem quibusdam. Mollitia, amet sequi, dolorem cumque voluptatibus quis et facilis quae quos ipsam quasi veniam praesentium ratione. Aliquam iste facilis mollitia? Impedit ab, natus error suscipit omnis quibusdam adipisci nemo accusamus quia, doloremque at sit molestiae nobis earum itaque. Consectetur accusantium corporis nulla iusto explicabo molestias at quisquam totam veritatis voluptatibus architecto porro illum quibusdam, quia eius nesciunt aperiam debitis ab laborum! Doloribus ea omnis ab, hic quaerat vel corporis veniam, quos accusantium perspiciatis rem.
                </p>
            </div>
        </div>
        </div>)}})
    }
    </>
  )
}

export default PostDetail