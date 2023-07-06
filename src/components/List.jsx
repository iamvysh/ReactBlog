import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { context } from '../store/context'
import "./list.css"


const List = () => {

    const data=useContext(context)
    const navigate=useNavigate()
    const {text,setText}=data
    
    console.log(text);






  return (
    <div className='lists'>

        <h1 className='head'>Blog lists</h1> <br /><br />

        <ul>
            {text.map((item)=>(
                <div key={item.id}>
                    <li>
                        <h1 onClick={()=>navigate(`/list/${item.id}`)} className='head2'>{item.heading}</h1>
                    </li>

                </div>
            ))}
        </ul>






    </div>
  )
}

export default List