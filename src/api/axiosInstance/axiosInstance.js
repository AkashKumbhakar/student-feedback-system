// import axios from "axios";
// import api from "../api";



// let axiosInstance = axios.create(
//     {
//         baseURL : api,
//         // headers :{

//         // }
//     }
// )
// // axiosInstance.interceptors.request.use(
// //     async function (config) {
// //         const token = sessionStorage.getItem("tokenValue") || localStorage.getItem("tokenValue");
// //         //console.log("token",token);
// //         if(token) {
// //             //config.headers["x-access-token"] = token;
// //             //config.headers.Authorization = token
// //             //config.headers.Authorization = `Bearer ${token}`
// //         }
// //         return config;
// //     },
// //     function (err){
// //         return Promise.reject(err)
// //     }
// // );


// export default axiosInstance
// ------------------------------------------

import axios from "axios";
let adminUrl = "http://localhost:8000/";

export const baseURL = adminUrl;
let axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export { adminUrl };

axiosInstance.interceptors.request.use(
  async function (config) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token !== null || token !== undefined) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axiosInstance;