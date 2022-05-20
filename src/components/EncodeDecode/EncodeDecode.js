import React from "react"
import { useNavigate } from "react-router-dom"

const EncodeDecode = () => {

    const navigate = useNavigate();

    const handelEncodePath=()=>{
        navigate('/encode')
    }
    const handelDecodePath=()=>{
        navigate('/decode')
    }
  return (
    <div className=" flex flex-col gap-y-8 justify-center lg:flex-row lg:justify-evenly items-center min-h-screen bg-indigo-50 shadow-lg shadow-indigo-300">
      <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" onClick={handelEncodePath} className="stack ">
        <div className="card shadow-md bg-cyan-400 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Encode Now!</h2>
            <p>Encode Your Message...</p>
          </div>
        </div>
        <div className="card shadow bg-blue-300 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Encode Now 2</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
        <div className="card shadow-sm bg-indigo-400 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Encode Now 3</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000" onClick={handelDecodePath} className="stack">
        <div className="card shadow-md bg-blue-400 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Decode Now!</h2>
            <p>Decode your Text...</p>
          </div>
        </div>
        <div className="card shadow bg-indigo-300 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Decode Now2</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
        <div className="card shadow-sm bg-cyan-300 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Decode Now 3</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncodeDecode;
