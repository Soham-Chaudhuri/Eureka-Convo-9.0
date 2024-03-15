import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, onValue, ref, set, update } from "firebase/database";
const auth = getAuth(app);
const db = getDatabase(app);
import pic11 from "../assets/11.webp";
import pic12 from "../assets/12.webp";
function Stage3() {
  const [answer3_1, setAnswer3_1] = useState(null);
  const [answer3_2, setAnswer3_2] = useState(null);
  const [answer3_3, setAnswer3_3] = useState(null);
  const [team_data, setTeam_data] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
  }, []);
  useEffect(() => {
    var userRef = ref(db, `${params.team_name.replace(/\./g, "_")}`);
    onValue(userRef, function (snapshot) {
      setTeam_data(snapshot.val());
    });
  }, []);
  // console.log(team_data);
  const checkAnswer = () => {
    if (!team_data.stage4) {
      var answer32 = answer3_2.toLowerCase();
      if (
        answer32.includes("champion") &&
        answer3_3.toLowerCase() === "charlie chaplin" && 
        answer3_1.toLowerCase() === "he is looking like a smug philosopher"
      ) {
        var dateNow = new Date();
        update(ref(db, `${params.team_name.replace(/\./g, "_")}`), {
          stage4: true,
          stage3Time: dateNow,
        });
        toast.success("Good Job!", { autoClose: 3200, theme: "dark" });
        navigate(`/${params.team_name}/stage4`);
        // navigate(`/${params.team_name}/stage2`);
      } else {
        toast.error("Try Again!", { autoClose: 3200, theme: "dark" });
      }
    } else {
      navigate(`/${params.team_name}/stage4`);
    }
  };
  return (
    <>
      {team_data && team_data.stage3 && (
        <div className="flex flex-col gap-4 my-4 h-max">
          <h1 className="my-6 text-4xl text-center font-extrabold leading-none tracking-widest text-gray-400 md:text-5xl lg:text-[5rem] dark:text-white anton-regular ">
            STAGE 3:
          </h1>

          <div className="w-[80vw] lg:w-[90vw] mx-auto">
            <h4 className="mb-1 text-lg lg:text-4xl leading-none tracking-tight font-semibold dark:text-white poppins-regular text-left">
              <span className=" text-gray-500 dark:text-gray-400  poppins-regular">
                Q1.
              </span>{" "}
              Connect the Links
            </h4>
            {/* <h3 className="mt-4 lg:ml-16 text-base lg:text-xl leading-none tracking-tight font-normal dark:text-white poppins-regular text-justify">
              I am a special type of circuit. You can also find me during wars
              as a combat vehicle.
            </h3> */}
          </div>
          <div className="mx-auto">
            <img src={pic12} alt="" className="object-contain scale-75" />
          </div>
          <div className="w-[80vw] lg:w-[90vw] mx-auto">
          <h3 className="mt-4 text-base lg:text-xl leading-none tracking-tight font-normal dark:text-white poppins-regular text-center">
              Find the place and go for the next clues
            </h3>
          </div>
          <div className="flex items-center lg:w-full max-w-md mb-3 seva-fields formkit-fields mt-5 mx-auto">
            <div className="relative lg:w-full mr-3 formkit-field">
              <input
                id="answer2.1"
                className="formkit-input poppins-regular bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="answer2.1"
                aria-label="answer2.1"
                placeholder="Your Answer"
                required
                type="text"
                onChange={(e) => {
                  setAnswer3_2(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-[80vw] lg:w-[90vw] mx-auto mt-10">
            <h4 className="mb-1 text-lg lg:text-4xl leading-none tracking-tight font-semibold dark:text-white poppins-regular text-left">
              <span className=" text-gray-500 dark:text-gray-400  poppins-regular">
                Q2.
              </span>{" "}
              Who am I?
            </h4>
            <h3 className="mt-4 lg:ml-16 text-base lg:text-xl leading-none tracking-tight font-normal dark:text-white poppins-regular text-justify">
              The circus performers were amazed by the kid's talent and courage,
              and decided to take him along on their journey to the gold rush.
            </h3>
          </div>
          <div className="mx-auto">
            <img src={pic11} alt="" className="object-contain scale-75" />
          </div>
          <div className="flex items-center lg:w-full max-w-md mb-3 seva-fields formkit-fields mt-5 mx-auto">
            <div className="relative lg:w-full mr-3 formkit-field">
              <input
                id="answer2.1"
                className="formkit-input poppins-regular bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="answer2.1"
                aria-label="answer2.1"
                placeholder="Your Answer"
                required
                type="text"
                onChange={(e) => {
                  setAnswer3_3(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-[80vw] lg:w-[90vw] mx-auto mt-10">
            <h4 className="mb-1 text-base lg:text-2xl leading-none tracking-tight font-semibold dark:text-white poppins-regular text-left">
              <span className=" text-gray-500 dark:text-gray-400  poppins-regular">
                Q3.
              </span>{" "}
              What did you say to your friend?
            </h4>
            <ol class="list-decimal mt-4 ml-3 lg:ml-20 text-base lg:text-2xl leading-normal tracking-tight font-normal dark:text-white poppins-regular text-justify">
              <h2 className="mb-4">
                You said to your friend, " 7 6 5 4 3 2 1 "
              </h2>
              <a className="mb-4 italic hover:text-teal-400" href="https://drive.google.com/file/d/1j3mMuuX-5XmrWIj6D8J5mDSFJvfsGRTu/view?usp=sharing" target="_blank">
                {/* https://drive.google.com/file/d/1j3mMuuX-5XmrWIj6D8J5mDSFJvfsGRTu/view?usp=sharing */}
                Drive
              </a>
              <li className="mb-4 mt-4">India code for declaration of stock.</li>
              <li className="mb-4">
                Purchase-related document that the GST portal provides to each
                business registered with it.
              </li>
              <li className="mb-4">Expect more from your hosting</li>
              <li className="mb-4">Radius of curvature of a lens</li>
              <li className="mb-4">Radius of curvature of a lens</li>
              <li className="mb-4">Eighth IRNSS</li>
              <li className="mb-4">Fifth harmony</li>
              <li className="mb-4">
                Resistor with colour code: Red {"->"} Violet{"->"} Orange{"->"}{" "}
                White.
              </li>
            </ol>
          </div>
          <div className="flex items-center lg:w-full max-w-md mb-3 seva-fields formkit-fields mt-5 mx-auto">
            <div className="relative lg:w-full mr-3 formkit-field">
              <input
                id="answer2.1"
                className="formkit-input poppins-regular bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="answer2.1"
                aria-label="answer2.1"
                placeholder="Your Answer"
                required
                type="text"
                onChange={(e) => {
                  setAnswer3_1(e.target.value);
                }}
              />
            </div>
            </div>
          <div className="flex gap-4 justify-center items-center my-20">
            <button className="formkit-submit " onClick={checkAnswer}>
              <span className="px-5 py-3 text-base font-semibold text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500 poppins-regular">
                Proceed
              </span>
            </button>
          </div>
        </div>
      )}
      <ToastContainer theme="dark" />
    </>
  );
}

export default Stage3;
