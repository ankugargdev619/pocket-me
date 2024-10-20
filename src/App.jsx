import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUsPage from "./pages/AboutUsPage";
import HowItWorks from "./pages/HowItWorks";
import ContactUs from "./pages/ContactUs";
import WhyPocketmePage from "./pages/WhyPocketmePage";

function App() {

  return (
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
  )
}



export default App;