import React from 'react'

function Contact() {
  return (
    <div className='Contact bg-dark'>
      <div className='Contact-text pt-4'>
        <h1>Contact</h1>
      </div>
      <div className='Contact-content'>
        <input type="text" placeholder='First name' className='bg-dark'></input>
        <input type="text" placeholder='Second name' className='bg-dark' ></input>
        <input type="text" placeholder='Email' className='bg-dark' ></input>
        <textarea  row="4" col="80" placeholder='leave a message' className='bg-dark'></textarea>
        <button type='submit' className='my-4'>Submit</button>

      </div>
    </div>
  )
}

export default Contact