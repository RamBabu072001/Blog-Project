import React, { useState , useEffect } from 'react'

import Postitems from './Postitems'

import { DUMMY_POSTS } from './Data'


function Posts() {



     const [posts , setPosts] = useState(DUMMY_POSTS)

     useEffect(()=>{
          localStorage.setItem("posts",JSON.stringify(posts));
     },[posts]);

  return (

    <>
        <div className='Posts d-flex flex-wrap justify-content-between'>
                {
                    posts.map(({id,Thumbnail,authorID,title,desc,Category})=>
                      
                        <Postitems key={id} postId={id} title={title} Thumbnail={Thumbnail} desc={desc} authorID={authorID}
                        Category={Category} />
                        
                        
                       

                        )
}
            

        </div>
    </>
  )
}

export default Posts