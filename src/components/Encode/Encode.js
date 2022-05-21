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

  const handelEncode = (e) => {
    e.preventDefault();

    let inputString = inputValue;
    const shiftNumber = 3;
    const length = alphabet.length;
    let ans = "";
    let ranNewPosition = "";
    let x = Math.floor(Math.random() * 9 + 1);

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

    setEncodeValue(ranNewPosition);
  };

  return (
    <div className="hero min-h-screen shadow-lg shadow-indigo-300">
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="1000"
        className="card flex-shrink-0 w-full max-w-xl  shadow-2xl bg-base-100"
      >
        <div className="card-body">
          <form
            data-aos="flip-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            onClick={handelEncode}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-indigo-600 font-semibold">
                  Input Text
                </span>
              </label>
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                placeholder="Type your message..."
                className="input input-bordered shadow-lg shadow-gray-200"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 border-0 hover:from-cyan-400 hover:via-indigo-400 hover:to-blue-500">
                Encode Message
              </button>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-indigo-600 font-semibold ">
                  Encoded Text
                </span>
              </label>

              <label className="label">
                <Link
                  to="/decode"
                  className="label-text-alt text-cyan-500 text-sm  link link-hover"
                >
                  Decode Message?
                </Link>
              </label>
            </div>
          </form>
          <p
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="1000"
            className=" shadow-lg shadow-gray-200 read-only  py-5 rounded px-3 border-2"
          >
            {encodeValue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Encode;
