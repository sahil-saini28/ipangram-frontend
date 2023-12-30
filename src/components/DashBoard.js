import React, {useContext,useState, useEffect} from 'react'
import userContextNote from "../Context/userContextNote";
import {  useNavigate } from "react-router-dom";

const DashBoard = () => {

    const [name, setdepartment] = useState("");
    const [description, setdescription] = useState("");
    const [employid, setemployid] = useState("658fd70a8ba8cecf537414de");

    const ondepartment = (e) => {
        setdepartment(e.target.value);
      };
    
      const ondescription = (e) => {
        setdescription(e.target.value);
      };
    // ++
    const [isLoading, setIsLoading] = useState(null);
    const [isdepartmentlistloading, setisdepartmentListLoading] = useState(null);
    const [isDepartmentLoading, setIsDepartmentLoading] = useState(null);

    // const [userName, setUserName] = useState(null);
    // const [userEmail, setUserEmail] = useState(null);
    // const [joiningDate, setJoiningDate] = useState(null);
        const [employeeDetails, setEmployeeDetails] = useState({});
        const [departmentdetails, setDepartmentDetails] = useState({});


    const navigate = useNavigate();

    const { isAdmin, setIsAdmin } = useContext(userContextNote);
    const Logout = (e)=>{
        localStorage.clear()
        navigate('/signin');

    }
    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
          console.log("MANAGER");
          try {
            const response = await fetch("http://localhost:4000/api/fetch/employee", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({}),
            });
            const json = await response.json();
            console.log(json);
            if (json[0].tag === "employ") {
              setEmployeeDetails(json);
              console.log(employeeDetails);
              setIsLoading(false); // Set loading to false as data fetching is complete
            } else {
              setIsLoading(false); // Set loading to false in case of an error or different tag
            }
          } catch (error) {
            setIsLoading(false); // Set loading to false if there's an error in fetching data
            console.error("Error fetching employee data:", error);
          }
        };
      
        // Call the async function to fetch data when `isAdmin` changes
        fetchData();
      }, []);
      




      useEffect(() => {
        const fetchData = async () => {
            setisdepartmentListLoading(true);
          console.log("MANAGER");
          try {
            const response = await fetch("http://localhost:4000/api/departments/getalldepartment", {
              method: "GET",
              headers: {
                "content-type": "application/json",
              },
            });
            const json = await response.json();
            console.log(json);
            if (json[0].__v === 0) {
              setDepartmentDetails(json);
              console.log(departmentdetails);
              setisdepartmentListLoading(false); // Set loading to false as data fetching is complete
            } else {
                setisdepartmentListLoading(false); // Set loading to false in case of an error or different tag
            }
          } catch (error) {
            setisdepartmentListLoading(false); // Set loading to false if there's an error in fetching data
            console.error("Error fetching employee data:", error);
          }
        };
      
        // Call the async function to fetch data when `isAdmin` changes
        fetchData();
      }, [setIsDepartmentLoading]);







      const createDepartment = async ( name, description, employid) => {
        setIsDepartmentLoading(true);
        console.log("MANAGER");
        const response = await fetch(
          "http://localhost:4000/api/departments/creatdepartment",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ name, description, employid }),
          }
        );
        const json = await response.json();
        if (json.name==="658fd70a8ba8cecf537414de") {

            console.log(json);
    setIsDepartmentLoading(true);
        } else {
            setIsDepartmentLoading(false);
        }
      };

      const onclickdepartment = (e) => {
        e.preventDefault();
        createDepartment(name, description, employid);
      };
    return (
    <div>
        {isAdmin==="MANAGER" || localStorage.getItem('token') !== null ? 
<div className="flex w-full h-full shadow-lg rounded-3xl">
  
    <section className="flex flex-col pt-3 w-4/12 bg-gray-50 h-full overflow-y-scroll">
    <div className="w-20 mx-auto mt-12 mb-10 p-4 bg-indigo-600 rounded-2xl text-white">
       <button
       onClick={Logout}
       >
        Logout
       </button>
      </div>

      <div className='flex  text-3xl justify-center'>
       Employees 
      </div>

      <ul className="mt-6">
      {isLoading ? (
  <div>Loading...</div>
) : (
  <ul>
    {employeeDetails && employeeDetails.length > 0 ? (
      employeeDetails.map((event) => (
        <li className="py-5 border-b px-3 transition hover:bg-indigo-100" key={event._id}>
          <h3 className="text-lg font-semibold">{event.username}</h3>
          <div className="text-md italic text-gray-400">{event.email}</div>
          <div className="text-md italic text-gray-400">Joining Date {event.createdAt}</div>
        </li>
      ))
    ) : (
      <div>No data found</div>
    )}
  </ul>
)}

      </ul>
    </section>
    <section className="w-6/12 px-4 flex flex-col bg-white rounded-r-3xl">
      <div className="flex justify-between items-center h-48 border-b-2 mb-8">
        <div className="flex space-x-4 items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img src="https://bit.ly/2KfKgdy" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">Manager_Name</h3>
            <p className="text-light text-gray-400">managermailid@yahoo.com</p>
          </div>
        </div>
        <div>
          <ul className="flex text-gray-400 space-x-4">
            <li className="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>
            </li>
            <li className="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </li>

            <li className="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </li>
            <li className="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </li>
            <li className="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="w-40 flex justify-center mx-auto  mb-10 p-4 bg-indigo-600 rounded-2xl text-white">
       <button
       onClick={Logout}
       >
        Add Department
       </button>
      </div> */}
      <div className='flex'>
      <label class="flex px-3">
        <input
        onChange={ondepartment}
         type="text"
         id="department"
         name="department"
          class="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
          placeholder="Department Name..." />
      </label>
      <label class="flex px-3">
        <input  
        onChange={ondescription}
        type="text"
                      id="description"
                      name="description" 
                      class="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
          placeholder="Description..." />
      </label>

      <div className="w-40 flex justify-center mx-auto   p-4 bg-indigo-600 rounded-2xl text-white">
       <button
       onClick={onclickdepartment}
       >
        Add Department
       </button>
      </div>
      </div>
      <div className='text-2xl mt-2 text-blue-600'>Department List</div>
      {isdepartmentlistloading ? (
  <div>Loading...</div>
) : (
  <ul>
    {departmentdetails && departmentdetails.length > 0 ? (
      departmentdetails.map((event) => (
        <li className="py-5 border-b px-3 transition hover:bg-indigo-100" key={event._id}>
          <h3 className="text-lg font-semibold">{event.name}</h3>
          <div className="text-md italic text-gray-600">{event.description}</div>
          <div className="text-md italic text-gray-400">{event.employid}</div>
        </li>
      ))
    ) : (
      <div>No data found</div>
    )}
  </ul>
)}
    </section>
  </div>
 : 
 
 <div></div>
    }
    </div>
  )
}

export default DashBoard