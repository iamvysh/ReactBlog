import React from 'react'
import { useContext,useRef } from 'react'
import { context } from '../store/context'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import "./Create.css"

const Create = () => {

  const inputRef=useRef(null)
  const data=useContext(context)
  const navigate=useNavigate()

  const {text,setText}=data


  const handlesubmit=()=>{
    const heading=inputRef.current.heading.value
    const blog=inputRef.current.blog.value
    const id=Date.now()

    setText([...text,{heading,blog,id}])

    navigate("/list")

    

  }




  return (
    <>
    <div className='first' >


    <form className='forrm' ref={inputRef} onClick={(e)=>e.preventDefault}>

      <label htmlFor="">Heading:</label><br />
      <input type="text" name="heading" placeholder='enter heading' className='abc'/>

      <br /><br />
      <label>Blog:</label><br />
      <textarea name="blog" id="" cols="30" rows="10" placeholder='enter your blog'  className='abc'></textarea>     




      <br /><br />

      

      <Button variant="outline-primary" onClick={handlesubmit}>Submit</Button>{' '}

    </form>
    </div>

    
    
    
    </>
  )
}

export default Create