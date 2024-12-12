import { Outlet, Link, NavLink} from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

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
    return(<>
            <Header />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout;