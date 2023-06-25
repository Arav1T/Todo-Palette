import React, { useContext } from 'react'
import { Data } from '../context/AllData'
import CodePalette from './CodePalette'

export default function ColorPalette() {
    
    // const changeColo = (ev) => {
    //     setAllColo({ ...AllColo, color: ev })
    //     // console.log(AllColo)
    // }
    // const [colo, setcolo] = useState([])
    // useEffect(() => {


    //   return async()=>{
    //     let color =fetch('https://www.thecolorapi.com/random?format=json&count=80')
    //     let fectColor= await ((await color)).json()
    //     console.log("fectColor",fectColor.hex);
    //     setcolo([...colo,fectColor.hex])

    // }
    // })
    const colorArr = ['#000000', '#FFFFFF', '#C0C0C0', '#808080', '#800000', '#FF0000', '#800080', '#FF00FF', '#008000', '#00FF00', '#808000', '#FFFF00', '#000080', '#008080', '#0000FF']
    
    const {color,displayShowHide} = useContext(Data)
    return (
        <div className='border-2 border-black py-2 ' style={{ color:color.textColor, display:displayShowHide}}>
            <div className='grid grid-cols-1 space-x-1 ml-6 mr-6 md:grid-cols-3 sm:grid-cols-2 '>
                <div  >
                    <h2>Select BackGroundColor Color</h2>
                    <div className='grid grid-cols-5  border-2 border-black content-center' style={{backgroundColor:color.elementColor}}>

                        {colorArr.map(ev => {
                            
                            return <CodePalette color={ev} where='BackGround' />

                        })}

                    </div>
                </div>
                <div>
                    <h2>Select ELement Color</h2>
                    <div className='grid grid-cols-5 border-2 border-black' style={{backgroundColor:color.elementColor}}>

                        {colorArr.map(ev => {
                            return <CodePalette color={ev} where='Element' />

                        })}

                    </div>
                </div>
                <div>
                    <h2>Select Text Color</h2>
                    <div className='grid grid-cols-5 border-2 border-black' style={{backgroundColor:color.elementColor}}>

                        {colorArr.map(ev => {
                            return <CodePalette color={ev} where='Text'/>

                        })}

                    </div>
                </div>

            </div>
        </div>
    )
}
