import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import codesheet from "../assets/9-nobg.png";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, onValue, ref, set, update } from "firebase/database";
const auth = getAuth(app);
const db = getDatabase(app);
function Stage1() {
  const params = useParams();
  const navigate = useNavigate();
  const [answer1_2, setAnswer1_2] = useState(null);
  const [answer1_3, setAnswer1_3] = useState(null);
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [input3, setInput3] = useState(null);
  const [input4, setInput4] = useState(null);
  const [input5, setInput5] = useState(null);
  const [input6, setInput6] = useState(null);
  const [input7, setInput7] = useState(null);
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
  // console.log(team_data);
  const checkAnswer = () => {
    if (!team_data.stage2) {
      if (input1 && input2 && input3 && input4 && input5 && input6 && input7) {
        const intInput1 = parseInt(input1);
        const intInput2 = parseInt(input2);
        const intInput3 = parseInt(input3);
        const intInput4 = parseInt(input4);
        const intInput5 = parseInt(input5);
        const intInput6 = parseInt(input6);
        const intInput7 = parseInt(input7);
        const intInput8 = parseInt(answer1_3);

        // Check if all inputs are valid integers
        if (
          !isNaN(intInput1) &&
          !isNaN(intInput2) &&
          !isNaN(intInput3) &&
          !isNaN(intInput4) &&
          !isNaN(intInput5) &&
          !isNaN(intInput6) &&
          !isNaN(intInput7)
        ) {
          if (
            intInput1 + intInput2 * intInput3 === 61 &&
            intInput1 - intInput4 - 5 === -6 &&
            intInput2 + intInput5 + intInput7 === 12 &&
            intInput3 / intInput6 - 4 === -2 &&
            intInput4 / intInput5 - intInput6 === 1 &&
            5 * intInput7 + 4 === 9 &&
            answer1_2.toLowerCase() === "missing link" &&
            intInput8 === 132113
          ) {
            var dateNow = new Date();
            update(ref(db, `${params.team_name.replace(/\./g, "_")}`), {
              stage2: true,
              stage1Time: dateNow,
            });
            toast.success("Good Job!", { autoClose: 3200, theme: "dark" });
            navigate(`/${params.team_name}/stage2`);
          } else {
            toast.error("Try Again!", { autoClose: 3200, theme: "dark" });
          }
        }
      } else {
        toast.error("Not working!", { autoClose: 3200, theme: "dark" });
      }
    } else {
      navigate(`/${params.team_name}/stage2`);
    }
  };

  return (
    <>
      {team_data && team_data.stage1 && (
        <div className="flex flex-col gap-4 my-4 h-max">
          <h1 className="my-6 text-4xl text-center font-extrabold leading-none tracking-widest text-gray-400 md:text-5xl lg:text-[5rem] dark:text-white anton-regular ">
            STAGE 1:
          </h1>
          <div className="w-[80vw] lg:w-[90vw] mx-auto">
            <h4 className="mb-1 text-lg lg:text-4xl leading-none tracking-tight font-semibold dark:text-white poppins-regular text-left">
              <span className=" text-gray-500 dark:text-gray-400  poppins-regular">
                Q1.
              </span>{" "}
              Fill in the missing numbers -
            </h4>
            <h3 className="mt-4 lg:ml-16 text-base lg:text-xl leading-none tracking-tight font-normal dark:text-white poppins-regular text-justify">
              The missing values are the whole numbers between 1 and 9. Each
              number is only used once. Each row is a math equation. Each column
              is a math equation. Remember that multiplication and division are
              performed before addition and subtraction.
            </h3>
          </div>
          <div class="relative rounded-xl  lg:p-14 p-8 h-max">
            <div class="grid grid-cols-6 gap-2 lg:gap-6 poppins-regular text-white lg:text-2xl text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">
              {/* <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">7</div> */}
              <input
                type="text"
                value={input1}
                onChange={(e) => {
                  setInput1(e.target.value);
                }}
                className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
                maxLength={1}
              />
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                +
              </div>
              {/* <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">9</div> */}
              <input
                type="text"
                value={input2}
                onChange={(e) => {
                  setInput2(e.target.value);
                }}
                className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
                maxLength={1}
              />
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                x
              </div>
              {/* <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">6</div> */}
              <input
                type="text"
                value={input3}
                onChange={(e) => {
                  setInput3(e.target.value);
                }}
                className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
                maxLength={1}
              />
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-indigo-400">
                61
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                -
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 opacity-0">
                8
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                +
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 opacity-0">
                10
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                &divide;
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 opacity-0">
                12
              </div>
              {/* <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">8</div> */}
              <input
                type="text"
                value={input4}
                onChange={(e) => {
                  setInput4(e.target.value);
                }}
                className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
                maxLength={1}
              />
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                &divide;
              </div>
              {/* <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">2</div> */}
              <input
                type="text"
                value={input5}
                onChange={(e) => {
                  setInput5(e.target.value);
                }}
                className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
                maxLength={1}
              />
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                -
              </div>
              {/* <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">3</div> */}
              <input
                type="text"
                value={input6}
                onChange={(e) => {
                  setInput6(e.target.value);
                }}
                className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
                maxLength={1}
              />
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-indigo-400">1</div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                -
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 opacity-0">
                20
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                +
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 opacity-0">
                22
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                -
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 opacity-0">
                24
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                5
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                x
              </div>
              {/* <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">1</div> */}
              <input
                type="text"
                value={input7}
                onChange={(e) => {
                  setInput7(e.target.value);
                }}
                className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
                maxLength={1}
              />
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                +
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                4
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-indigo-400">9</div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-indigo-400">
                -6
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 opacity-0">
                32
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-indigo-400">
                12
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 opacity-0">
                34
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-indigo-400">
                -2
              </div>
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 opacity-0">
                36
              </div>
            </div>
          </div>
          <div className="w-[80vw] lg:w-[90vw] mx-auto">
            <h4 className="mb-1 text-lg lg:text-4xl leading-none tracking-tight font-semibold dark:text-white poppins-regular text-left">
              <span className=" text-gray-500 dark:text-gray-400  poppins-regular">
                Q2.
              </span>{" "}
              Solve This Puzzle -
            </h4>
          </div>
          <div className="mx-auto w-[80vw] lg:[90vw] lg:h-72 flex items-center">
            <p className="my-6 leading-10 text-4xl text-center font-extrabold tracking-widest text-gray-400 md:text-5xl lg:text-[5rem] dark:text-white poppins-regular">
              A B C D E F G H J M O P Q R S T U V W X Y Z
            </p>
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
                  setAnswer1_2(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-[80vw] lg:w-[90vw] mx-auto mt-10">
            <h4 className="mb-1 text-lg lg:text-4xl leading-none tracking-tight font-semibold dark:text-white poppins-regular text-left">
              <span className=" text-gray-500 dark:text-gray-400  poppins-regular">
                Q3.
              </span>{" "}
              Find the next number -
            </h4>
          </div>
          <div className="mx-auto max-w-max lg:[90vw]  flex items-center">
            <p className="my-6 leading-10 text-4xl text-center font-extrabold tracking-widest text-gray-400 md:text-5xl lg:text-[5rem] dark:text-white poppins-regular">
              3
              <br />
              13
              <br />
              1113
              <br />
              3113
            </p>
          </div>
          <div className="flex items-center lg:w-full max-w-md mb-3 seva-fields formkit-fields mt-3 mx-auto">
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
                  setAnswer1_3(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center my-10">
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

export default Stage1;
