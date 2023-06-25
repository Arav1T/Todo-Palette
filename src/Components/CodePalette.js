import React, { useContext } from 'react'
import { Data } from '../context/AllData'

export default function CodePalette(props) {
    const {AllColo,setAllColo} = useContext(Data)
    const change=() => {
        setAllColo({ where:props.where , color: props.color })
        console.log(AllColo)

    }
    return (
        <div>
            <div  className='sm:h-10 sm:w-10 h-5  m-2 cursor-pointer hover:shadow-md hover:shadow-black' style={{ backgroundColor: [props.color] }} onClick={change}></div>
        </div>
    )
}
