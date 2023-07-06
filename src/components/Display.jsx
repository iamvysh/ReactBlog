import React from 'react'
import { context } from '../store/context'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import "./display.css"

const Display = () => {
    const {text}=useContext(context)


    const params=useParams()
    const{id}=params

    console.log(id);


    const filterItem=text.filter((item)=>{

        return item.id==id

    })

    
  return (



    <div className='display'>

        <h1 >
            {
                filterItem.map((item)=>(

                    <>
                    <h1 key={item.id} className='heading1'>{item.heading}</h1><br /><br /><br />
                    <h4 className='heading2'>{item.blog}</h4>
                    
                    </>
                )
                )
            }
            

        </h1>


    </div>
  )
}

export default Display