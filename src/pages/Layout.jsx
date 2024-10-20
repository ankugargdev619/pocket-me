import { Outlet, Link, NavLink} from "react-router-dom";
import {motion} from "framer-motion";

function Layout(){
    const linkClass = "py-8";
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
            <nav className='px-10 md:px-20 flex items-center justify-between gap-10 sticky top-0 bg-white z-50 border-b-2'>
                <img src="https://pocketme.in/assets/images/logo.svg" alt="logo" />
                <div className='flex gap-10'>
                    <NavLink className={linkClass} to="/">Home</NavLink>
                    <NavLink className={linkClass} to="/about">About Us</NavLink>
                    <NavLink className={linkClass} to="/why-pocketme">Why Pocketme</NavLink>
                    <NavLink className={linkClass} to="/how-it-works">How It Works</NavLink>
                    <NavLink className={linkClass} to="/contact-us">Contact Us</NavLink>
                </div>
            </nav>

            <Outlet/>
        </motion.div>
    )
}

export default Layout;