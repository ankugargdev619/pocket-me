const CIN = "U74909MH2024PTC424684";
const Year = "2024";

const footerSections = [
    {
        header:"Contact Us",
        links : [
           {
                title :"+91 9987149456",
                link : "#"
           },
           {
                title :"info@pocketme.in",
                link : "#"
           }
        ]
    },
    {
        header:"Company",
        links : [
           {
                title :"About Us",
                link : "#"
           },
           {
                title :"Contact Us",
                link : "#"
           },
           {
                title :"Careers",
                link : "#"
           },
           {
                title :"Blog",
                link : "#"
           },
           {
                title :"FAQs",
                link : "#"
           }
        ]
    },
    {
        header:"Legal",
        links : [
           {
                title :"Terms & Conditions",
                link : "#"
           },
           {
                title :"Privacy Policy",
                link : "#"
           },
           {
                title :"Code of Conduct",
                link : "#"
           },
           {
                title :"Fair Practice Code",
                link : "#"
           },
           {
                title :"Digital Lending",
                link : "#"
           },
           {
                title :"Interest Rate Policy",
                link : "#"
           },
           {
                title :"Grievance Redressal Policy",
                link : "#"
           },
           {
                title :"Ombudsman Scheme",
                link : "#"
           },
           {
                title :"LSP & DLA",
                link : "#"
           },
           {
                title :"Disclosures",
                link : "#"
           }
        ]
    },
]

function Footer(){
    return(
        <div className="bg-mainColor px-20 py-10 text-white">
            <div className="flex justify-between">
                {footerSections.map((item)=>(
                    <div className="my-10">
                        <h3 className="mb-5 text-xl font-bold">{item.header}</h3>
                        <div className="flex">
                            <div className="flex flex-col">      
                                {item.links.map((element)=>(
                                    <a className="mb-2" href={element.link}>{element.title}  <br /></a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <div  className="my-10 pr-10" >
                    <div className="text-xl font-bold">About Our Company</div>
                    <img src="https://pocketme.in/assets/images/logo.svg" alt="logo" />
                </div>
            </div>

            <div className="text-center">Copyright © {Year} Pocketme Tech Private Limited. All Rights Reserved.</div>
            <div className="text-center">CIN: {CIN}</div>
        </div>
    );
}

export default Footer;