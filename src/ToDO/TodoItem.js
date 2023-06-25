import React, { useContext } from 'react'
import { Data } from '../context/AllData'

export default function TodoItem(props) {
    const {todo,settodo,color} = useContext(Data)
    const OnDelete=()=>{
        console.log(props.element.ids)
        settodo(
            todo.filter((e)=>(props.element.ids !== e.ids))
        )
    }
  return (
    <div className='flex w-fit ml-1 sm:ml-5' >
      <input type="checkbox" className='w-5' style={{backgroundColor:color.elementColor,color:color.textColor}} />
      <p className='border-2 border-black bg-slate-50 text-gray-950 rounded-lg hover:shadow-xl hover:shadow-gray-950 m-2 pl-2 pr-2   break-words ' style={{backgroundColor:color.elementColor,color:color.textColor}}>
        {props.element.texts} 
      </p>
      <button onClick={OnDelete}>🗙</button>
    </div>
  )
}
