import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
function Stage5() {
  return (
    <>
      <div className="flex flex-col gap-4 my-4 h-max">
        <h1 className="my-6 text-4xl text-center font-extrabold leading-none tracking-widest text-gray-400 md:text-5xl lg:text-[5rem] dark:text-white anton-regular ">
          STAGE 5:
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
      </div>
      <ToastContainer theme="dark" />
    </>
  );
}

export default Stage5;
