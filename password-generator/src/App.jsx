import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [password, setPassword] = useState('');
  const [checkNumbers, setCheckNumbers] = useState(false);
  const [checkSyms, setCheckSyms] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);

  //useCallback() hook in React.js
  // In React, components often re-render when their state or props change. When a component re-renders, any functions defined inside it are recreated as well. This isn't usually a problem for small applications, but in larger ones or components that rely heavily on callbacks, recreating functions unnecessarily can lead to performance issues.

  // Here's where useCallback comes in handy. It's a hook provided by React that memoizes a callback function. Memoization means that the function will only be recreated if one of its dependencies changes. By wrapping a function with useCallback and specifying its dependencies, React will ensure that the function is only recreated when necessary, optimizing performance by preventing unnecessary re-renders.

  // For example, imagine you have a parent component passing a callback function down to a child component as a prop. If you wrap that callback function with useCallback in the parent component and specify the relevant dependencies, React will only recreate the callback function if those dependencies change. This can help avoid unnecessary re-renders of the child component.

  // In summary, useCallback is used to optimize performance by memoizing callback functions, ensuring they are only recreated when their dependencies change, thus reducing unnecessary re-renders of components.



  const generatePassword = useCallback(() =>{
    //Creating a function named generate password that gets recreated if and only if one of the three dependencies (passwordLength, checkNumbers and checkSyms) change
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let nums = '0123456789';
    let symbols = '!@#$%^&*()_+';
    if(checkNumbers){
      str += nums;
    }
    if(checkSyms){
      str += symbols;
    }
    let pass = '';
    for(let i  = 0; i < passwordLength; i++){
      const char = Math.floor(Math.random()*str.length);
      pass += str.charAt(char)
    }
    setPassword(pass);
  }, [passwordLength, checkNumbers, checkSyms]);


  const copyButton = useState(null);

  useEffect(()=>{ //Generating password everytime any of the three (passwordLength, chackNumbers or checkSyms) changes
    generatePassword();
    copyButton.current.innerHTML = `Copy`
    copyButton.current.style.backgroundColor = '#334155'; 
  },[passwordLength, checkNumbers, checkSyms]);


  const copyPasswordToClipboard = () => {
    copyButton.current.innerHTML = `Copied <i class="fa-solid fa-square-check"></i>`
    copyButton.current.style.backgroundColor = 'green';
    window.navigator.clipboard.writeText(password);
  }



  return (


    <div className='flex justify-center items-center w-full h-screen bg-slate-900 duration-500'>
      <div className='rounded-3xl w-3/4 h-3/5 flex flex-col justify-center items-center bg-slate-500'>
        <h1 className='bg-green-900 rounded-md shadow-slate-800 shadow-lg text-white text-2xl m-6 p-4'>Password Generator</h1>
        <div className='w-full flex flex-col items-center'>
          <div className='flex w-full flex-row justify-center items-center'>
            <input
            className='rounded outline-none m-4 p-2'
            type='text'
            value={password}
            readOnly
            />
            <button
            ref={copyButton}
            onClick={copyPasswordToClipboard}
            className='bg-slate-700 text-white p-2 rounded-lg shadow-black shadow-md'
            >Copy</button>
          </div>
          <div className='w-max m-6'>
            <input
            type="range"
            className='cursor-pointer'
            value={passwordLength}
            min={8}
            max={24}
            onChange={(event) => {setPasswordLength(event.target.value)}}
            name=""
            id="" />
            <label className='w-max bg-white m-4 px-4 py-2 rounded-md' htmlFor="password-length">Length : {passwordLength}</label>

            <input
            type="checkbox"
            className='cursor-pointer w-6'
            defaultChecked={checkNumbers}
            onChange={() => {
              setCheckNumbers((previousValue) => !previousValue)
            }}           
            />
            <label className='w-fit text-white bg-blue-900 m-4 px-4 py-2 rounded-md' htmlFor="is-number-checked">Numbers</label>
            <input
            type="checkbox"
            className='cursor-pointer w-6'
            defaultChecked={checkSyms}
            onChange={() => {
              setCheckSyms((previousValue) => !previousValue)
            }}          
            />
            <label className='w-fit text-white bg-blue-900 m-4 px-4 py-2 rounded-md' htmlFor="is-number-checked">Symbols</label>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
