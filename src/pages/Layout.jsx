import { Outlet, Link, NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import "../styles/navbar.css";
import { useState } from "react";
import Footer from "../components/Footer";

const navLinks = [
    {
        routeName : "Home",
        routePath : "/"
    },
    {
        routeName : "About Us",
        routePath : "/about"
    },
    {
        routeName : "Why Pocketme",
        routePath : "/why-pocketme"
    },
    {
        routeName : "How It Works",
        routePath : "/how-it-works"
    },
    {
        routeName : "Contact Us",
        routePath : "/contact-us"
    }
]

function Layout(){
    const [menuOpen,setMenuOpen] = useState(false);

    function toggleMenu(){
        setMenuOpen((menuOpen)=>!menuOpen);
    }
    return(
        <motion.div 
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
            <nav className='flex px-10 md:px-20 items-center justify-between gap-10 sticky top-0 bg-white z-50 border-b-2'>
                <img className="w-36 md:w-40 lg:w-48 z-100" src="https://pocketme.in/assets/images/logo.svg" alt="logo" />
                <div className='hidden md:flex flex gap-10 z-100'>
                    {navLinks.map((link) => (
                        <NavLink className="py-8" to={link.routePath} >{link.routeName}</NavLink>
                    ))}
                </div>
                <div onClick={toggleMenu} className="block md:hidden z-100">
                    {menuOpen?<>
                        <div className="ham-menu open">
                            <div/>
                        </div>
                        {
                            <motion.div
                                    variants={{
                                        hidden:{y:-500},
                                        visible:{y:0},
                                    }}
                                    initial="hidden"
                                    animate="visible" 
                                    transition={{
                                        duration : 1
                                    }}
                                className="absolute right-0 top-16 bg-white flex flex-col px-10 w-screen z-50">
                                
                                {navLinks.map((link) => (
                                <NavLink className="py-8 border-hide" to={link.routePath} >{link.routeName}</NavLink>
                                ))}
                            </motion.div>
                        }
                    </>
                    :
                    <div className="ham-menu">
                        <div />
                    </div>
                    }
                </div>
            </nav>

            <Outlet/>
            <Footer />
        </motion.div>
    )
}

export default Layout;