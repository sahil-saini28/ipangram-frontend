import React, { useContext, useState } from "react";
import userContextNote from "../Context/userContextNote";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  //   const context = useContext(NoteContextProvider);
  const { isAdmin, setIsAdmin } = useContext(userContextNote);


  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();
  const [username, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpasword] = useState("");

  const onuser = (e) => {
    setName(e.target.value);
    console.log(username);
  };
  const onemail = (e) => {
    setemail(e.target.value);
    console.log(email);
  };

  const onpassword = (e) => {
    setpasword(e.target.value);
    console.log(password);
  };
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const managerFetch = async (username, email, password) => {
    setIsLoading(true);
    console.log("MANAGER");
    const response = await fetch(
      "http://localhost:4000/api/auth/signup/manager",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({username, email, password }),
      }
    );
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate('/dashboard');
console.log(json);
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };

  const managerSignup = (e) => {
    e.preventDefault();
    managerFetch(username,email, password);
  };
//   ----------------------------------------------------------------------------------------------------------------------------------
const employeeFetch = async (username, email, password) => {
    setIsLoading(true);
    console.log("EMPLOYEE");
    const response = await fetch(
      "http://localhost:4000/api/auth/singup ",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({username, email, password }),
      }
    );
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate('/dashboard');
console.log(json);
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };

  const employeeSignup = (e) => {
    e.preventDefault();
    employeeFetch(username,email, password);
  };

//   -----------------------------------------------------------------------------------------------------------------------------



  console.log(isAdmin)
  return (
    <div>
        
      <div className="antialiased bg-gradient-to-br from-green-100 to-white">
        
        <div className="container px-6 mx-auto">
            
          <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
            <div className="flex flex-col w-full">
       


              <div>
                <svg
                  className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h1 className="text-5xl text-gray-800 font-bold">iPangram</h1>
              <p className="w-5/12 my-4 mx-auto md:mx-0 text-gray-500">
                Login and Signup portal for Managers and Employees
              </p>

              <div className="flex">

              <Link to='/signin'>
                <button
                  type="button"
                  className="mr-10 px-8 py-4 bg-green-600 rounded-lg text-green-100"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div className="mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </div>
                    <div className="font-bold">Signin</div>
                  </div>
                </button>
                </Link>


                <Link to='/signup'>
                <button
                  type="button"
                  className=" mx-10 px-8 py-4 bg-green-600 rounded-lg text-green-100"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div className="mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </div>
                    <div className="font-bold">SignUp</div>
                  </div>
                </button>
                </Link>

              </div>
            </div>
            <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
              <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                  SignUp as {isAdmin}
                </h2>
                <form action="" className="w-full">
                  <div id="input" className="flex flex-col w-full my-5">
                    <label htmlFor="username" className="text-gray-500 mb-2">
                      Username{" "}
                    </label>
                    <input
                      onChange={onuser}
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Please insert your username"
                      className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                  </div>
                  <div id="input" className="flex flex-col w-full my-5">
                    <label htmlFor="username" className="text-gray-500 mb-2">
                      Email{" "}
                    </label>
                    <input
                      onChange={onemail}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Please insert your username"
                      className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                  </div>
                  <div id="input" className="flex flex-col w-full my-5">
                    <label htmlFor="password" className="text-gray-500 mb-2">
                      Password
                    </label>
                    <input
                      onChange={onpassword}
                      type="text"
                      id="password"
                      name="password"
                      placeholder="Please insert your password"
                      className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                  </div>
                  <div id="button" className="flex flex-col w-full my-5">

{/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

*/}
                  {isAdmin==='MANAGER'? <button
                    //   onClick={()=>{isAdmin==="MANAGER"? managerSignup(): employeeSignup()}}
                    onClick={managerSignup}
                      type="button"
                      className="w-full py-4 bg-green-600 rounded-lg text-green-100"
                    >
                      <div className="flex flex-row items-center justify-center">
                        <div className="mr-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            ></path>
                          </svg>
                        </div>
                        <div className="font-bold">SignUp {isAdmin}</div>
                      </div>
                    </button>
          :
                    <button
                    //   onClick={()=>{isAdmin==="MANAGER"? managerSignup(): employeeSignup()}}
                    onClick={employeeSignup}
                      type="button"
                      className="w-full py-4 bg-green-600 rounded-lg text-green-100"
                    >
                      <div className="flex flex-row items-center justify-center">
                        <div className="mr-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            ></path>
                          </svg>
                        </div>
                        <div className="font-bold">SignUp{isAdmin}</div>
                      </div>
                    </button>
                    }

{/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++                     */}
{isLoading===false?<div className="text-red-500">Wrong Credentials, try again</div>:<div></div>}

                    <div className="flex justify-evenly mt-5">
                      {/* <a
                        href="#"
                        className="w-full text-center font-medium text-gray-500"
                        >Singup!</a
                      > */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
