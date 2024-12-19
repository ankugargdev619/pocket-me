import {AnimatePresence, motion} from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { navlinkAtom } from "../atoms/navlinks";

export const Header = () => {
    const navLinks = useRecoilValue(navlinkAtom);
    const [menuOpen,setMenuOpen] = useState(false);
    function toggleMenu(){
        setMenuOpen((menuOpen)=>!menuOpen);
    }

    return <>
            <motion.div 
                className="sticky top-0 z-50"
                variants={{
                    hidden:{y:-100},
                    visible:{y:0},
                }}
                initial="hidden"
                animate="visible" 
                transition={{
                    duration : 1
                }}
            >
                <nav className='flex px-10 md:px-20 items-center justify-between gap-10 z-50 bg-white border-b-2'>
                    <img className="w-36 md:w-40 lg:w-48" src="/logo.svg" alt="logo" />
                    <div className='hidden md:flex gap-10 '>
                        {navLinks.map((link,idx) => (
                            <NavLink key={idx} className="py-8" to={link.routePath} >{link.routeName}</NavLink>
                        ))}
                    </div>
                    
                    <div onClick={toggleMenu} className="block md:hidden">
                        {menuOpen?<>
                            <div className="ham-menu open">
                                <div/>
                            </div>
                        </>
                        :
                        <div className="ham-menu">
                            <div />
                        </div>
                        }
                    </div>
                </nav>
                
                <AnimatePresence>         
                    {menuOpen && <motion.div
                            variants={{
                                hidden:{height:0},
                                visible:{height:"auto"},
                            }}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{
                                duration : 0.5
                            }}
                        className="absolute right-0 top-16 bg-white flex flex-col px-10 w-screen z-30 overflow-hidden">
                        
                        {navLinks.map((link) => (
                        <NavLink className="py-8 border-hide" onClick={()=> {setMenuOpen(false)}} to={link.routePath} >{link.routeName}</NavLink>
                        ))}
                    </motion.div>}
                </AnimatePresence> 

            </motion.div>
    </>
}