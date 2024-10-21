import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUsPage from "./pages/AboutUsPage";
import HowItWorks from "./pages/HowItWorks";
import ContactUs from "./pages/ContactUs";
import WhyPocketmePage from "./pages/WhyPocketmePage";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

function App() {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000)
  },[])

  return (
    <div>
        {loading ? <Loader /> : 
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={< Layout/>}>
                  <Route index element={<Home/>} />
                  <Route path="about" element={<AboutUsPage/>} />
                  <Route path="why-pocketme" element={<WhyPocketmePage/>} />
                  <Route path="how-it-works" element={<HowItWorks/>} />
                  <Route path="contact-us" element={<ContactUs/>} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        }
    </div>
  )
}



export default App;