import React from 'react'
import '../css/style.css'
import '../css/media.css'
import { Link } from 'react-router-dom'
const Login = () => {
   
  return (
    <section className="weblogin-sec">
    <div className='container'>
        <div className='row'>
            <div className="col-50">
            <form action="">
              <h2 className="title-2">Login to your account</h2>
              <div className="form-group">
                <input
                  type="password"
                  id="new-pass"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="confirm-pass"
                  placeholder="Password"
                />
              </div>
              {/* Forgot password link  */}
              <div className="forgot-pass">
                <Link to="/forget-password"> Forgot password</Link>
                {/* <a href="#">Forgot password</a> */}
              </div>
              <button type="submit" className="btn btn-primary">Enter</button>
              <Link to="/registration" className="btn btn-secendary">Create an account</Link>
            </form>
          </div>
          <div className="col-50">
            <div className="weblogin">
              <img src='../../../Assets/login-img.png'  alt="" />
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default Login