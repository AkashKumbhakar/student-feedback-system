import React from 'react'
import '../css/style.css'
import '../css/media.css'
const ForgetPass = () => {
  return (
     <section className="forgot-sec">
      <div className="container">
        <div className="row">
          <div className="col-50">
            <form action="">
              <h2 className="title-2">Frogot Password?</h2>
              <div className="form-group">
                <input
                  type="password"
                  id="new-pass"
                  placeholder="Enter new password"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="confirm-pass"
                  placeholder="Confirm password"
                />
              </div>
              <button type="submit" className="btn btn-primary">Enter</button>
            </form>
          </div>
          <div className="col-50">
            <div className="square">
              <img src="../../../Assets/illustration.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgetPass