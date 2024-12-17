import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhyPocketme from "../components/WhyPocketme";
import { Step } from "../components/Step";

function HowItWorks(){
    return <div>
        <div className="flex flex-col items-center px-10 md:px-20 mt-8 mb-20">
            <div className="text-center my-5 text-3xl font-bold">
                How It Works
            </div>
            <img className="mx-auto mb-10" src="/heading-line-dec.png" alt="" />
            <Step title="Register" imgs={["/1_LaunchApp.png","2_SelectLanguage.png"]} />
        </div>
    </div>
}

export default HowItWorks;