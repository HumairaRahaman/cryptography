import React, { useState } from "react"
import { Link } from "react-router-dom"

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Decode = () => {
  const [inputValue, setInputValue] = useState("");
  const [encodeValue, setEncodeValue] = useState("");
  // const previousInputValue = useRef("");

  // useEffect(() => {
  //   previousInputValue.current = inputValue;
   
  //   const shiftNumber = 3;
  //   const length = alphabet.length;
  //   let ans = "";
  //   // let ranNewPosition = ""

  //   for (let i = 0; i < inputValue.length; i++) {
  //     if (inputValue[i] === "." ) {
  //       ans += " ";
  //     } else {
  //       let position = alphabet.indexOf(inputValue[i]);
  //       let newPosition = (position - shiftNumber) % length;
  //       ans += alphabet[newPosition];
  //       // ranNewPosition = ans - 
  //     }
  //   }
  //   console.log(typeof(ans));
  //   setEncodeValue(ans);
  // }, [inputValue]);


  const handelDecode= e=>{
    e.preventDefault()
      // setInputValue(e.target.value)
        let inputString = inputValue
        const shiftNumber = 3;
        const length = alphabet.length;
        let ans = "";
        let ranNewPosition = ""
        let newInputString = ""
          // let x = Math.floor((Math.random() * 9)+1);
          ranNewPosition = inputString.slice(1, inputString.length);
          newInputString = ranNewPosition;
        for (let i = 0; i < ranNewPosition.length; i++) {
         
          if (ranNewPosition[i] === ".") {
            ans += " ";
          } else {
            
             
            let position = alphabet.indexOf(ranNewPosition[i]);
            let newPosition = (position - shiftNumber) % length;
            
            ans += alphabet[newPosition];
            
           
          }
        }
    
    console.log(inputString)
     
    console.log(newInputString);
    setEncodeValue(ans);
    
  }


  return (
    <div className="hero min-h-screen bg-indigo-50 shadow-lg shadow-indigo-300">
      <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
        <div className="card-body">
        <form onClick={handelDecode} >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-indigo-600 font-semibold">Input Text</span>
            </label>
            <input
             value={inputValue || ''}
             onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Type your encoded Text..."
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 border-0 hover:from-cyan-400 hover:via-indigo-400 hover:to-blue-500">Decode Message</button>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-indigo-600 font-semibold">Decoded Message</span>
            </label>
            
            {/* <input
              type="text"
              placeholder="Decoded
              Message"
              className="input input-bordered"
            /> */}
            <label className="label">
              <Link to="/encode" className="label-text-alt text-cyan-500 text-sm  link link-hover">
                Encode Text?
              </Link>
            </label>
            </div>
          
        </form>
        <p className="  py-5 rounded px-3 border-2">{encodeValue}</p>
        </div>
      </div>
    </div>
  );
};

export default Decode;
