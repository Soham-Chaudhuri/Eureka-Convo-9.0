import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, onValue, ref, set, update } from "firebase/database";
const auth = getAuth(app);
const db = getDatabase(app);
function Stage6() {
  const [answer6_1, setAnswer6_1] = useState(null);
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
  const checkAnswer = () => {
    if (answer6_1.toLowerCase() === "embrace the light ignite the path") {
      var dateNow = new Date();
      update(ref(db, `${params.team_name.replace(/\./g, "_")}`), {
        stage6Time: dateNow,
      });
      toast.success("Good Job!", { autoClose: 3200, theme: "dark" });
      navigate(`/${params.team_name}/finally`);
    } else {
      toast.error("Try Again!", { autoClose: 3200, theme: "dark" });
    }
  };
  return (
    <>
      {team_data && team_data.stage6 && (
        <div className="flex flex-col gap-4 my-4 max-h-max">
          <h1 className="my-6 text-4xl text-center font-extrabold leading-none tracking-widest text-gray-400 md:text-5xl lg:text-[5rem] dark:text-white anton-regular ">
            STAGE 6:
          </h1>
          <div className="w-[80vw] lg:w-[90vw] mx-auto mt-10">
            <h4 className="mb-1 text-lg lg:text-4xl leading-none tracking-tight font-semibold dark:text-white poppins-regular text-left">
              <span className=" text-gray-500 dark:text-gray-400  poppins-regular">
                Q1.
              </span>{" "}
              The Final Showdown.....
              <h3 className="mt-4 lg:ml-16 text-base lg:text-xl leading-none tracking-tight font-normal dark:text-white poppins-regular text-justify">
                In 2019, due to the worldwide pandemic COVID-19, it was not
                possible to organize the Convolution, but the event managers
                decided on an online task for the event Eureka! Rajat took part
                in that event. The online task was to decode a cipher. The
                cipher was a difficult one Rajat alone couldn't do it, so he
                sought help from his friend who in turn sought help from their
                respective friends. Rajat's friend, Roy DeSuza , aspired to be
                a coder but was a little forgetful, so he took notes of every
                important thing he needed to remember. His laptop was an old
                hand-me-down which he got from his father, it crashed
                frequently, so he saved everything online. Roy had told Rajat
                where he saved the code, but Rajat forgot the name of the
                service, although he remembers some distinct features of the
                service such as it being a web-based platform for collaborative
                coding, version control, and project management by Microsoft. Now that Rajat is a secret member of the organizing team,
                he wants to test if you are capable enough to find the code.
              </h3>
            </h4>
          </div>

          <div className="flex items-center lg:w-full max-w-md mb-3 seva-fields formkit-fields mt-5 mx-auto">
            <div className="relative lg:w-full mr-3 formkit-field">
              <input
                id="answer5.1"
                className="formkit-input poppins-regular bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="answer5.1"
                aria-label="answer5.1"
                placeholder="Your Answer"
                required
                type="text"
                onChange={(e) => {
                  setAnswer6_1(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center my-20">
            <button className="formkit-submit" onClick={checkAnswer}>
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

export default Stage6;
