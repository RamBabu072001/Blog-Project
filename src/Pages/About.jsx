import React from 'react'
import blog from '../assets/images/blog1.jpg';
import aboutImage from '../assets/images/luffy.jpg'

function About() {
  return (
    <div className="About bg-dark">
        <div className='About-header'>
          <h2>ABOUT ME</h2>
        </div>
        <div className='About-image d-flex justify-content-center'>
          <img src={aboutImage} height={600} width={600}></img>
        </div>
        <div className='About-text'> 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus amet 
          quas nulla vero placeat dolor modi culpa! Debitis, atque incidunt alias voluptatem 
          sapiente expedita impedit nulla laboriosam suscipit a eaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ad quam eveniet aut nam aliquam saepe rerum rem expedita est nemo, debitis reprehenderit earum veritatis 
          quibusdam assumenda quae voluptatibus ratione.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos veritatis nulla, quaerat a sint, itaque blanditiis eveniet amet reiciendis 
          labore incidunt officiis ad vero at ex, suscipit iste cumque ut.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eaque sunt minus vitae labore porro, alias ipsam veritatis maiores ut, numquam iusto vero facere incidunt. Ducimus itaque assumenda veniam tenetur labore ipsa eum, harum recusandae. Pariatur explicabo eaque perspiciatis veniam distinctio? Facere numquam enim consequatur inventore quas nobis quidem reprehenderit?
        </div>

    </div>
  )
}

export default About