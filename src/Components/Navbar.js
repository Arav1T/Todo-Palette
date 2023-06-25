import React, { useContext } from 'react'
import { Data } from '../context/AllData'

export default function Navbar() {
  const {color,setdisplayShowHide,displayShowHide} = useContext(Data)
    const ShowHide =()=>{
      if(displayShowHide==='none'){
          setdisplayShowHide('block')
          console.log(displayShowHide)
      }
      else{setdisplayShowHide('none')}
    }
  return (
    <div className='flex justify-between bg-gray-600 text-white p-2 ' style={{backgroundColor:color.elementColor, color:color.textColor}}>
      <div >
        <ul className='flex space-x-4 content-center'>
            <li>Home</li>
            <li>about</li>
            <li>OR</li>
            <li>New</li>
        </ul>
      </div>
      <div>
        click here to see ColorPalette:
        <button onClick={ShowHide} className='bg-gray-700 p-3 rounded-3xl hover:shadow-xl hover:shadow-white'>Color</button>
      </div>
    </div>
  )
}
