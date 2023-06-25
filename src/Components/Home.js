
import React, { useContext } from 'react'
import { Data } from '../context/AllData'
import Todo from '../ToDO/Todo'

export default function Home() {
   

  const {color} = useContext(Data)
  
  return (
    <div className='flex justify-center '>
      <div style={{backgroundColor:color.elementColor, color:color.textColor}} className='justify-center flex-col flex w-5/6 py-5 mt-2'>
       <h3 className='justify-center flex '>TODO</h3>
      <Todo/>
    </div>
    </div>
  )
}
