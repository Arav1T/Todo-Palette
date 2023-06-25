
import Navbar from './Components/Navbar';
import ColorPalette from './Components/ColorPalette';
import Home from './Components/Home';
import { useContext } from 'react';
import { Data } from './context/AllData';

function App() {
  const {color} = useContext(Data)
  return (
    <>
    <div style={{backgroundColor:color.backgroundColor, color:color.textColor}} className='h-screen'>
      <Navbar />
      <ColorPalette />
      <Home />
    </div>
    </>
  );
}

export default App;
