import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, onValue, ref, set, update } from "firebase/database";
const auth = getAuth(app);
const db = getDatabase(app);
function Finally() {
    useEffect(() => {
        toast.success("Result will be declared soon!", { autoClose: 3200, theme: "dark" });
    }, []);
  return (
    <>
    <div className="flex justify-center items-center h-[100vh]">
        <div className="self-center">

        <h1 class="mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-8xl lg:text-9xl dark:text-white">Eureka!</h1>
        </div>
    </div>
    <ToastContainer theme="dark" />
    </>
  );
}

export default Finally;
