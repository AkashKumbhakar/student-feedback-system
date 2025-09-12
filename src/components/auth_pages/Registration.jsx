import React from 'react'
import '../css/style.css'
import '../css/media.css'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    <section className="registration-sec">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <form className="registration-form" action="">
              <h2 className="title-2">Creat an account</h2>
              <div className="form-group">
                <input
                  type="text"
                  id="Name"
                  placeholder="Name" 
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="class"
                  placeholder="Class"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  placeholder="Password" 
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="confirm-pass"
                  placeholder="Confirm password"
                />
              </div>
              {/* <button type="submit" className="btn btn-primary" >Enter</button> */}
              <Link to="/verification" className='btn btn-primary'>Enter</Link>
            </form>
          </div>
          <div className="col-5">
            <div className="registration">
              <img src='../../../Assets/reg-img.png' alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration