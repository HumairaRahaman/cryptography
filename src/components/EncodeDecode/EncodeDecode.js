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
      <div onClick={handelEncodePath} className="stack">
        <div className="card shadow-md bg-cyan-400 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Encode Now!</h2>
            <p>Encode Your Message...</p>
          </div>
        </div>
        <div className="card shadow bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Notification 2</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
        <div className="card shadow-sm bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Notification 3</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
      </div>
      <div onClick={handelDecodePath} className="stack">
        <div className="card shadow-md bg-blue-400 text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Decode Now!</h2>
            <p>Decode your Text...</p>
          </div>
        </div>
        <div className="card shadow bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Notification 2</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
        <div className="card shadow-sm bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Notification 3</h2>
            <p>You have 3 unread messages. Tap here to see.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncodeDecode;
