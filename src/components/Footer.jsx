import { useRecoilValue } from "recoil";
import { footerAtom } from "../atoms/footer";

const CIN = "U74909MH2024PTC424684";
const Year = "2024";

function Footer(){
     const footerSections = useRecoilValue(footerAtom);
     
    return(
        <div className="bg-mainColor px-20 py-10 text-white">
            <div className="flex flex-col md:flex-row justify-between">
                {footerSections.map((item,id)=>(
                    <div key={id} className="my-10">
                        <h3 className="mb-5 text-xl font-bold">{item.header}</h3>
                        <div className="flex">
                            <div className="flex flex-col">      
                                {item.links.map((element,idx)=>(
                                    <a key={idx} className="mb-2" href={element.link}>{element.title}  <br /></a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <div  className="my-10 pr-10" >
                    <div className="text-xl font-bold">About Our Company</div>
                    <img src="/logo.svg" alt="logo" />
                </div>
            </div>

            <div className="text-center">Copyright © {Year} Pocketme Tech Private Limited. All Rights Reserved.</div>
            <div className="text-center">CIN: {CIN}</div>
        </div>
    );
}

export default Footer;