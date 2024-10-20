import React,{useEffect,useState} from "react";
import "../styles/loader.css";
import { div } from "framer-motion/client";

function Loader(){
    return (
    <div className="flex justify-center items-center h-screen">
        <span class=" loader"></span>
    </div>
    )
}

export default Loader;