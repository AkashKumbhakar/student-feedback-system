import React from 'react'
import '../css/style.css'
import '../css/media.css'
import { Link } from 'react-router-dom'

const Verification = () => {
  return (
    <section className="verification-sec">
      <div className="container">
        <div className="card">
         <div className="card-content">
           <div className="notification">
            <img
              src="../../../Assets/verification.png"
              alt=""
            />
          </div>
          <h2 className="title-2">Enter Verfication code</h2>
          <div className="code-inputs">
           <div className="box"></div>
           <div className="box"></div>
           <div className="box"></div>
           <div className="box"></div>
          </div>
          <p>If you didn’t receive a code, <Link to="#">Resend</Link> </p>
          <button type="submit" className="btn btn-primary">Enter</button>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Verification