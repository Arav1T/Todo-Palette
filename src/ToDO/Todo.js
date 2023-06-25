import React, { useContext, useState } from 'react'
import TodoItem from './TodoItem'
import { Data } from '../context/AllData'

export default function Todo() {
    const {todo,settodo,color} = useContext(Data)
    const [valTodo, setvalTodo] = useState({
        texts:'',
        ids:0
    })
    const onSave=()=>{
        setvalTodo({...valTodo,ids : valTodo.ids+1})
        settodo([...todo,valTodo])
    }
  return (
    <div className='justify-center flex ' >
      <div className='sm:w-3/4 border-2 border-black w-4/5 pb-2' style={{backgroundColor:color.backgroundColor}}>
        <input type="text" name="text" id="text" placeholder="write here" onChange={(e) =>  setvalTodo({...valTodo,texts:e.target.value})}  className='w-4/5  border-2 border-black sm:m-5 m-2 pl-2 rounded-tl-xl rounded-br-xl ' style={{backgroundColor:color.elementColor,color:color.textColor}} />
        <button onClick={onSave} className='bg-slate-300 p-0.5 sm:p-2 border- 2 border-slate-950 hover:shadow-lg hover:shadow-gray-50 rounded-md ' style={{backgroundColor:color.elementColor}}>Save</button>
        {todo.map((con)=>{return <TodoItem  element={con} key={con.id}/>})}
      </div>
    </div>
  )
}
