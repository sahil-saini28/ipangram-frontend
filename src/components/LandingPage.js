import React, { useContext, useState } from "react";
import userContextNote from "../Context/userContextNote";
import { useNavigate, useLocation } from "react-router-dom";
const LandingPage = () => {
  //   const context = useContext(NoteContextProvider);
    const navigate = useNavigate();
    const location = useLocation();

  const { isAdmin, setIsAdmin } = useContext(userContextNote);
  const setStatusManager =()=>{
    setIsAdmin("MANAGER")
    navigate('/signin');
  }
  const setStatusEmployee =()=>{
    setIsAdmin("EMPLOYEE")
    navigate('/signin');
  }

  return (

    <div>
   {location.pathname !== "/"?<div></div>    :
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

            </div>
          
            <div className="flex">
                <button
                onClick={()=>{setStatusManager()}}
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
                    <div className="font-bold">I am a MANAGER</div>
                  </div>
                </button>

                <button
                onClick={()=>{setStatusEmployee()}}
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
                    <div className="font-bold">I am a EMPLOYEE</div>
                  </div>
                </button>
              </div>
          </div>
        </div>
      </div>
}
    </div>
  );
};

export default LandingPage;
