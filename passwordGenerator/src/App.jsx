import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [pwdlength, setPwdLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    const alphaset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numset = "0123456789";
    const charset = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
    let allSets = alphaset;

    if (numberAllowed) allSets += numset;
    if (characterAllowed) allSets += charset;

    let pwd = "";
    for (let i = 0; i < pwdlength; i++) {
      const randomIndex = Math.floor(Math.random() * allSets.length);
      pwd += allSets[randomIndex];
    }

    pwd = pwd.split('').sort(() => 0.5 - Math.random()).join('');
    setPassword(pwd);
  }, [pwdlength, numberAllowed, characterAllowed, setPassword]); // THis dependency array is used for optimization purposes, so the componenets or variables or methods that shuld be stored in the cache for better optimization are included in this array

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [pwdlength, numberAllowed, characterAllowed, passwordGenerator]); // This dependency array is a pure dependency array that contains only those elemnts on which if their state changes, the component must be re-rendered

  return (
      <div className='rounded-lg w-full mx-w-md shadow-md mx-auto my-8 px-4 py-3 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'> Password Generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly 
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gappwdlength-x-1'>
            <input 
            type="range"
            min={8}
            max={20}
            value={pwdlength}
            className='cursor-pointer'
            onChange={(e) => {setPwdLength(e.target.value)}}
            />
            <label htmlFor="">Length: {pwdlength}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={
              () => {setNumberAllowed((prev) => !prev)                
              }}
            />
            <label htmlFor="labelInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={characterAllowed}
              id='characterInput'
              onChange={
                () => {
                  setCharactersAllowed(
                    (prev) => !prev
                  )
                }
              }
            />
            <label htmlFor="CharactersInput">Characters</label>
          </div>
        </div>
      </div>
    
  )
}

export default App
