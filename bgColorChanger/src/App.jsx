import { useState } from 'react'

function App() {
  const [color, setColor] = useState('rgb(59 130 246)');

  return (
    <div className='m-0 w-full h-screen duration-500 ease-out' style={{backgroundColor: color}}>
      <h1 className='w-fit h-24 text-center text-white text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Click the buttons below to change the background color</h1>
      <div className='w-full flex justify-center items-center'>
        <div className='w-fit fixed flex flex-wrap justify-center items-center bottom-4 m-2 px-4 py-2 rounded-3xl bg-slate-400 mx-1/3'>
          <button
          onClick={()=>{
            setColor('rgb(239 68 68)');
          }}
          className="p-4 w-24 h-fit text-white bg-red-500 rounded-md mx-4">Red</button>
          <button
          onClick={()=>{
            setColor('rgb(59 130 246)');
          }}
          className="p-4 w-24 h-fit text-white bg-blue-500 rounded-md mx-4">Blue</button>
          <button
          onClick={()=>{
            setColor('rgb(21 128 61)');
          }}
          className="p-4 w-24 h-fit text-white bg-green-700 rounded-md mx-4">Green</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
