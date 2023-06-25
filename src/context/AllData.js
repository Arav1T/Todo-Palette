import { createContext, useEffect, useState } from "react";

const Data = createContext()
const Datacolo =({children})=>{
    const [AllColo, setAllColo] = useState({
        where:'',
        color:''
})
const [color, setcolor] = useState({
    backgroundColor:'white',
    textColor:'black',
    elementColor:'gray'
  })
  const [displayShowHide, setdisplayShowHide] = useState('none')
useEffect(() => {
    if(AllColo.where==='BackGround'){setcolor({...color,backgroundColor:AllColo.color})}
    else if(AllColo.where==='Element'){setcolor({...color,elementColor:AllColo.color})}
    else if(AllColo.where==='Text'){setcolor({...color,textColor:AllColo.color})}
}, [AllColo])
const [todo, settodo] = useState([])

    return(
        <Data.Provider value={{AllColo,setAllColo,color,displayShowHide,setdisplayShowHide,todo,settodo}}>
            {children}
        </Data.Provider>
    )
}

export {Data,Datacolo};