import { useState } from "react";
import { PlusIcon } from "../icons/PlusIcon"
import { MinusIcon } from "../icons/MinusIcon";
import {motion} from "framer-motion";

export const Question = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return <div className="w-full rounded-lg mb-2">
        <div className="flex items-center justify-between text-lg md:text-xl text-white bg-mainColor font-bold mb-2 px-4 py-2 rounded-lg">
            {props.question}
            <div  onClick={handleVisibility} >
                {isVisible ? <MinusIcon /> : <PlusIcon />}
            </div>
            </div>
        {
            isVisible ? 
            <motion.div 
                    variants={{
                        away:{y:-20,opacity:0},
                        visible:{y:0,opacity:1},
                    }}
                    initial="away"
                    animate="visible" 
                    transition={{
                        duration : 1,
                        delay:0
                    }}
                    className="text-lg px-6 ">
                
                {props.answer}
            </motion.div> : null}
        <br />
    </div>
}