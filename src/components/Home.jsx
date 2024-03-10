import React, { useState } from "react";
import "./Home.css";
import puzzlelogo from "../assets/1.webp";
import { useNavigate } from "react-router-dom";
import NeonGlory from "./NeonGlory";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
const auth = getAuth(app);
const db = getDatabase(app);
function Home() {
  const navigate = useNavigate();
  const [team_name, setTeam_name] = useState(null);
  const home = () =>{
    set(ref(db,`${team_name.replace(/\./g, "_")}`),{
      stage1: true,
      stage2: false,
      stage3: false,
      stage4: false,
      stage5: false,
      startTime:"",
      stage1Time:"",
      stage2Time:"",
      stage3Time:"",
      stage4Time:"",
      stage5Time:"",
    });
    if (team_name !== null && team_name.length !== 0)
                navigate(`${team_name}/guidelines`);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        {/* <img src={puzzlelogo} alt="" className="object-scale-down h-24 w-48"/> */}
        <h3 className="mb-4 text-xl lg:text-3xl leading-none tracking-tight font-semibold dark:text-white poppins-regular">
          Convolution 9.0 Presents
        </h3>
        {/* <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-widest text-gray-900 md:text-5xl lg:text-[7rem] dark:text-white anton-regular">
          EUREKA!
        </h1> */}
        {/* <img src={eurekalogo} className="object-contain h-48 w-96" /> */}
        <NeonGlory/>
        <h4 className="mb-4 text-xl lg:text-4xl leading-none tracking-tight font-semibold text-gray-500 dark:text-gray-400 poppins-regular">
          Crack the Code, Claim the Crown!
        </h4>

        {/* <div>
            <input type="text" id="team_name" className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Team Name" required />
        </div> */}

        <div className="flex items-center lg:w-full max-w-screen-md mb-3 seva-fields formkit-fields mt-5">
          <div className="relative lg:w-full mr-3 formkit-field">
            <input
              id="team_name"
              className="formkit-input poppins-regular bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="team_name"
              aria-label="Team Name"
              placeholder="Your Team Name"
              required
              type="text"
              onChange={(e) => {
                setTeam_name(e.target.value);
              }}
            />
          </div>
          <button
            className="formkit-submit"
            onClick={home}
          >
            <span className="px-5 py-3 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 poppins-regular">
              Proceed
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;

// Convolution 9.0 Presents
// EUREKA
// Crack the Code, Claim the Crown!
