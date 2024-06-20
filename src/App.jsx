import './App.css';
import bycicle from './assets/bycicle.svg';
import ocean from './assets/ocean.svg';
import background from './assets/background.svg';
import orig from './assets/orig.webp'
import { useState } from 'react';

function App() {
  const [img, setImg] = useState(false);

  const [back, setBack] = useState(background);

  console.log(back);


  return (
    <div className='header'>
      <div className='container_1'>
        <div className='text' style={{color: back == ocean ? 'white' : 'black'}}>
          <h1>Thematic <br/> Backgrounds</h1>
          <p>Whimisial handcrafted <br /> backdrops in <br /> different styles</p>
        </div>

        <div className='images'>

        <div style={{cursor: 'pointer',backgroundImage: `url(${back})`, width: '80%',  display: 'flex', justifyContent: 'center', backgroundRepeat: 'no-repeat'}} onClick={() => setImg(!img)}>
          <img src={bycicle} alt="Error" width={600}/>
        </div>
        </div>

        {img ? <div className='modal'>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 5}}>
            <h1>Backdrops</h1>
            <p onClick={() => setImg(!img)}>close</p>
          </div>
          <div className= 'Backdrops'>
            <img src={background} style={{cursor: 'pointer', width: 400}} alt="Error!" onClick={() => setBack(background)}/>
            <img src={ocean} style={{cursor: 'pointer', width: 400}} alt="Error" onClick={() => setBack(ocean)} />
            <img src={orig} style={{cursor: 'pointer', width: 400}} alt="Error" onClick={() => setBack(orig)} />
          </div>
        </div> : ''}
      </div>
    </div>
  )
}

export default App