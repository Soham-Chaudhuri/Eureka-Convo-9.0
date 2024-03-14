import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, onValue, ref, set, update } from "firebase/database";
const auth = getAuth(app);
const db = getDatabase(app);
import "./Stage2.css";
import chess from "../assets/4.webp";
import ball from "../assets/5.webp";
import ballon from "../assets/6.webp";
import jersey from "../assets/7.png";
import six from "../assets/8.webp";
function Stage2() {
  const [answer2_1, setAnswer2_1] = useState(null);
  const [answer2_2, setAnswer2_2] = useState(null);
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [input3, setInput3] = useState(null);
  const [input4, setInput4] = useState(null);
  const [input5, setInput5] = useState(null);
  const [input6, setInput6] = useState(null);
  const [input7, setInput7] = useState(null);
  const [input8, setInput8] = useState(null);
  const [input9, setInput9] = useState(null);
  const [input10, setInput10] = useState(null);
  const [input11, setInput11] = useState(null);
  const [input12, setInput12] = useState(null);
  const [input13, setInput13] = useState(null);
  const [input14, setInput14] = useState(null);
  const [input15, setInput15] = useState(null);
  const [input16, setInput16] = useState(null);
  const [input17, setInput17] = useState(null);
  const [input18, setInput18] = useState(null);
  const [input19, setInput19] = useState(null);
  const [input20, setInput20] = useState(null);
  const [input21, setInput21] = useState(null);
  const [input22, setInput22] = useState(null);
  const [input23, setInput23] = useState(null);
  const [input24, setInput24] = useState(null);
  const [input25, setInput25] = useState(null);
  const [input26, setInput26] = useState(null);
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
    if (!team_data.stage3) {
      if (
        answer2_1.toLowerCase() === "g2h1" &&
        answer2_2.toLowerCase() === "aitana" &&
        input1.toLowerCase() === "s" &&
        input2.toLowerCase() === "i" &&
        input3.toLowerCase() === "a" &&
        input4.toLowerCase() === "h" &&
        input5.toLowerCase() === "b" &&
        input6.toLowerCase() === "i" &&
        input7.toLowerCase() === "n" &&
        input8.toLowerCase() === "s" &&
        input9.toLowerCase() === "s" &&
        input10.toLowerCase() === "a" &&
        input11.toLowerCase() === "n" &&
        input12.toLowerCase() === "h" &&
        input13.toLowerCase() === "i" &&
        input14.toLowerCase() === "a" &&
        input15.toLowerCase() === "i" &&
        input16.toLowerCase() === "n" &&
        input17.toLowerCase() === "s" &&
        input18.toLowerCase() === "h" &&
        input19.toLowerCase() === "b" &&
        input20.toLowerCase() === "s" &&
        input21.toLowerCase() === "a" &&
        input22.toLowerCase() === "i" &&
        input23.toLowerCase() === "b" &&
        input24.toLowerCase() === "s" &&
        input25.toLowerCase() === "a" &&
        input26.toLowerCase() === "h" 
      ) {
        var dateNow = new Date();
        // console.log("ok vai");
        update(ref(db, `${params.team_name.replace(/\./g, "_")}`), {
          stage3: true,
          stage2Time: dateNow,
        });
        toast.success("Good Job!", { autoClose: 3200, theme: "dark" });
        navigate(`/${params.team_name}/stage3`);
      } else {
        toast.error("Try Again!", { autoClose: 3200, theme: "dark" });
      }
    } else {
      navigate(`/${params.team_name}/stage3`);
    }
  };
  return (
    <>
      {team_data && team_data.stage2 && (
        <div className="flex flex-col gap-4 my-4 h-max">
          <h1 className="my-6 text-4xl text-center font-extrabold leading-none tracking-widest text-gray-400 md:text-5xl lg:text-[5rem] dark:text-white anton-regular ">
            STAGE 2:
          </h1>
          <div className="w-[80vw] lg:w-[90vw] mx-auto">
            <h4 className="mb-1 text-lg lg:text-4xl leading-none tracking-tight font-semibold dark:text-white poppins-regular text-left">
              <span className=" text-gray-500 dark:text-gray-400  poppins-regular">
                Q1.
              </span>{" "}
              What is the last move _ _ _ _
            </h4>
            <h3 className="mt-4 lg:ml-16 text-base lg:text-xl leading-none tracking-tight font-normal dark:text-white poppins-regular text-justify">
              [eg : a1b1 : a1 to b1]
            </h3>
          </div>
          <div className="mx-auto">
            <img src={chess} alt="" className="object-contain scale-75" />
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
                  setAnswer2_1(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-[80vw] lg:w-[90vw] mx-auto">
            <h4 className="mb-1 mt-10 text-lg lg:text-4xl leading-none tracking-tight font-semibold dark:text-white poppins-regular text-left">
              <span className=" text-gray-500 dark:text-gray-400  poppins-regular">
                Q2.
              </span>{" "}
              Nombre de 6 palabras quién soy?
            </h4>
            {/* <h3 className="mt-4 lg:ml-16 text-base lg:text-xl leading-none tracking-tight font-normal dark:text-white poppins-regular text-justify">
            
          </h3> */}
          </div>
          <div className="q2-container w-[80vw] h-[35vh] lg:h-auto lg:w-[75vw] mx-auto gap-4">
            <div className="item1">
              <img
                src={ball}
                alt=""
                className="object-contain scale-[60%]  lg:scale-75"
              />
            </div>
            <div className="item2">
              <img src={ballon} alt="" className="object-contain scale-75" />
            </div>
            <div className="item3">
              <img src={jersey} alt="" className="object-contain scale-75" />
            </div>
            <div className="item4">
              <img src={six} alt="" className="object-contain scale-75" />
            </div>
          </div>
          <div className="flex items-center lg:w-full max-w-md mb-3 seva-fields formkit-fields mt-5 mx-auto">
            <div className="relative lg:w-full mr-3 formkit-field">
              <input
                id="answer2.2"
                className="formkit-input poppins-regular bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="answer2.2"
                aria-label="answer2.2"
                placeholder="Your Answer"
                required
                type="text"
                onChange={(e) => {
                  setAnswer2_2(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-[80vw] lg:w-[90vw] mx-auto mt-10">
            <h4 className="mb-1 text-lg lg:text-4xl leading-none tracking-tight font-semibold dark:text-white poppins-regular text-left">
              <span className=" text-gray-500 dark:text-gray-400  poppins-regular">
                Q3.
              </span>{" "}
              An Amritsar born player who has played 67 tests for india.
              Solve…..
            </h4>
          </div>
          <div class="relative rounded-xl  lg:p-14 p-8 h-max">
            <div class="grid grid-cols-6 gap-2 lg:gap-6 poppins-regular text-white lg:text-2xl text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">
              <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                N
              </div>
              <input
                type="text"
                value={input1}
                onChange={(e) => {
                  setInput1(e.target.value);
                }}
                className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
                maxLength={1}
              /><input
              type="text"
              value={input2}
              onChange={(e) => {
                setInput2(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
                B
              </div>
              <input
              type="text"
              value={input3}
              onChange={(e) => {
                setInput3(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <input
              type="text"
              value={input4}
              onChange={(e) => {
                setInput4(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
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
                H
              </div>
            <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
              A                
              </div>
              <input
              type="text"
              value={input6}
              onChange={(e) => {
                setInput6(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <input
              type="text"
              value={input7}
              onChange={(e) => {
                setInput7(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <input
              type="text"
              value={input8}
              onChange={(e) => {
                setInput8(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <input
              type="text"
              value={input9}
              onChange={(e) => {
                setInput9(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <input
              type="text"
              value={input10}
              onChange={(e) => {
                setInput10(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <input
              type="text"
              value={input11}
              onChange={(e) => {
                setInput11(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <input
              type="text"
              value={input12}
              onChange={(e) => {
                setInput12(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
              B                
              </div>
              <input
              type="text"
              value={input13}
              onChange={(e) => {
                setInput13(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
              <input
              type="text"
              value={input14}
              onChange={(e) => {
                setInput14(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
              <input
              type="text"
              value={input15}
              onChange={(e) => {
                setInput15(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
              H                
              </div>
              <input
              type="text"
              value={input16}
              onChange={(e) => {
                setInput16(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
              <input
              type="text"
              value={input17}
              onChange={(e) => {
                setInput17(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
              B                
              </div>
              <input
              type="text"
              value={input18}
              onChange={(e) => {
                setInput18(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
              N                
              </div>
              <input
              type="text"
              value={input19}
              onChange={(e) => {
                setInput19(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <input
              type="text"
              value={input20}
              onChange={(e) => {
                setInput20(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
              I                
              </div>
              <input
              type="text"
              value={input21}
              onChange={(e) => {
                setInput21(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <input
              type="text"
              value={input22}
              onChange={(e) => {
                setInput22(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <input
              type="text"
              value={input23}
              onChange={(e) => {
                setInput23(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <input
              type="text"
              value={input24}
              onChange={(e) => {
                setInput24(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <input
              type="text"
              value={input25}
              onChange={(e) => {
                setInput25(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <input
              type="text"
              value={input26}
              onChange={(e) => {
                setInput26(e.target.value);
              }}
              className="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500 text-center"
              maxLength={1}
            />
            <div class="p-2 lg:p-4 rounded-lg shadow-lg bg-fuchsia-500">
              N                
              </div>
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

export default Stage2;
