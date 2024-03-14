import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, onValue, ref, set, update } from "firebase/database";
const auth = getAuth(app);
const db = getDatabase(app);
function Guidelines() {
  const params = useParams();
  const navigate = useNavigate();
  const [team_data, setTeam_data] = useState(null);
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
    if (team_data.stage1) {
      var dateNow = new Date();
      update(ref(db, `${params.team_name.replace(/\./g, "_")}`), {
        startTime: dateNow,
      });
      navigate(`/${params.team_name}/stage1`);
    } else {
      navigate(`/${params.team_name}/stage1`);
    }
  };
  return (
    <div className="flex flex-col gap-2 my-4 h-[100dvh]">
      <h1 className="my-6 text-4xl text-center font-extrabold leading-none tracking-widest text-gray-400 md:text-5xl lg:text-[5rem] dark:text-white anton-regular ">
        GUIDELINES:
      </h1>
      <div className="w-[80vw] lg:w-[90vw] mx-auto">
        <ol class="list-decimal mt-4 lg:ml-16 text-base lg:text-2xl leading-normal tracking-tight font-normal dark:text-white poppins-regular text-justify">
          <li className="mb-4">
            Round 2 will be the final round consisting of puzzle solving,
            Riddles, deciphering codes and many more.
          </li>
          <li className="mb-4">In the 2nd round there will be 6 stages.</li>
          <li className="mb-4">
            Each of 5 stages has 3 Questions and the 6th one has a final
            question.
          </li>
          <li className="mb-4">
            Solving each stage will lead to the next one.
          </li>
          <li className="mb-4">
            The team that completes the final stage first becomes winner and the
            teams finishing 2nd and 3rd will be runner-up.
          </li>
          <li className="mb-4">
            Contestants will be allowed to browse the internet or use any
            software or program however they want to solve the puzzles.
          </li>
          <li className="mb-4">
            Most of this round will be of hunting the clues online designed by
            the organizing team, so contestants are required to carry at least
            one laptop, charger and as well mobile phones per team.
          </li>
        </ol>
      </div>
      <div className="flex gap-4 justify-center items-center my-10">
        <button className="formkit-submit" onClick={checkAnswer}>
          <span className="px-5 py-3 text-base font-semibold text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500 poppins-regular">
            Proceed
          </span>
        </button>
      </div>
    </div>
  );
}

export default Guidelines;
