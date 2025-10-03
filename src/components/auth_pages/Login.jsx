import React from "react";
import "../css/style.css";
import "../css/media.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../../api/axiosInstance/axiosInstance";
import { loginEnd } from "../../api/api";
const Login = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  // const loginHandler = (data) => {
  //   console.log("Form Submitted : ", data);

  //   let loginData = {
  //     email: data.email,
  //     password: data.password,
  //   };
  //   axiosInstance
  //     .post(loginEnd, loginData)
  //     .then((res) => {
  //       console.log(res);
  //       sessionStorage.setItem("tokenValue", res.data.token);
  //       navigate("/dashboard");
  //     })
  //     .catch((err) =>{
  //       console.log(err);
  //       alert(err.response.data.message)
  //     } );
      
  // };
  const loginHandler = async (data) => {
  //setLoading(true); // Show loading state when login starts
  try {
    const response = await axiosInstance.post(loginEnd, {
        email: data.email,
        password: data.password
      });
    console.log('API Response:', response.data);
    if(response.data.success){
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);
     // toast(${response.data.message});
    //   navigate('/');
    //   setLoading(false);
    // Role-based redirection
      if (response.data.role === "admin") {
        // Redirect to backend EJS admin dashboard (port 8000)
        window.location.href = "http://localhost:8000/admin-dashboard";
      } else {
        // Redirect to React student dashboard
        navigate("/dashboard");
      }
    }else{
      //setLoading(false);
      //toast(${response.data.message});
    }
  } catch (error) {
    console.error('API Error:', error.message);
    //setLoading(false); // Stop loading on error
  }
};
  return (
    <section className="weblogin-sec">
      <div className="container">
        <div className="row">
          <div className="col-50">
            <form action="" onSubmit={handleSubmit(loginHandler)}>
              <h2 className="title-2">Login to your account</h2>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  {...register("email")}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="confirm-pass"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>
              {/* Forgot password link  */}
              <div className="forgot-pass">
                <Link to="/forget-password"> Forgot password</Link>
                {/* <a href="#">Forgot password</a> */}
              </div>
              <button type="submit" className="btn btn-primary">
                Enter
              </button>
              <Link to="/registration" className="btn btn-secendary">
                Create an account
              </Link>
            </form>
          </div>
          <div className="col-50">
            <div className="weblogin">
              <img src="../../../Assets/login-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
