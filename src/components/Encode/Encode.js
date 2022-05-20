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
const Encode = () => {
  const [inputValue, setInputValue] = useState("");
  const [encodeValue, setEncodeValue] = useState("");
//   const previousInputValue = useRef("");
//   useEffect(() => {
//     previousInputValue.current = inputValue;
    
//     const shiftNumber = 3;
//     const length = alphabet.length;
//     let ans = "";
//     let ranNewPosition = ""
//     let x = Math.floor((Math.random() * 9)+1);

//     for (let i = 0; i < inputValue.length; i++) {
//       if (inputValue[i] === " ") {
//         ans += ".";
//       } else {
//         let position = alphabet.indexOf(inputValue[i]);
//         let newPosition = (position + shiftNumber) % length;
        
//         ans += alphabet[newPosition];
//          ranNewPosition = x + ans;
//       }
//     }
//     // console.log(ans);
//     setEncodeValue(ranNewPosition);
//   }, [inputValue]);

  const handelEncode= e=>{
    e.preventDefault()
      // setInputValue(e.target.value)
        let inputString = inputValue
        const shiftNumber = 3;
        const length = alphabet.length;
        let ans = "";
        let ranNewPosition = ""
          let x = Math.floor((Math.random() * 9)+1);
    
        for (let i = 0; i < inputString.length; i++) {
          if (inputString[i] === " ") {
            ans += ".";
          } else {
            let position = alphabet.indexOf(inputString[i]);
            let newPosition = (position + shiftNumber) % length;
            
            ans += alphabet[newPosition];
            ranNewPosition = x + ans;
           
          }
        }
    
    console.log(inputString)
     console.log(ranNewPosition);
    setEncodeValue(ranNewPosition);
    
  }

  return (
    <div className="hero min-h-screen shadow-lg shadow-indigo-300">
      <div className="card flex-shrink-0 w-full max-w-xl  shadow-2xl bg-base-100">
        <div className="card-body">
        <form onClick={handelEncode} >
          <div   className="form-control">
            <label className="label">
              <span className="label-text text-indigo-600 font-semibold">Input Text</span>
            </label>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Type your message..."
              className="input input-bordered"
            />
            {/* <h2>Current Value: </h2>
            <h2>Previous Value: {previousInputValue.current}</h2> */}
          </div>

          <div className="form-control mt-6">
            <button  className="btn btn-primary bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 border-0 hover:from-cyan-400 hover:via-indigo-400 hover:to-blue-500">Encode Message</button>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-indigo-600 font-semibold ">Encoded Text</span>
            </label>
            
           
            <label className="label">
              <Link to="/decode" className="label-text-alt text-cyan-500 text-sm  link link-hover">
                Decode Message?
              </Link>
            </label>
          </div>
        </form>
        <p className=" read-only  py-5 rounded px-3 border-2">{encodeValue}</p>
        </div>
      </div>
    </div>
  );
};

export default Encode;
