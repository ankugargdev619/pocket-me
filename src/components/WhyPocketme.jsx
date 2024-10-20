import Card from "./Card";

const cards = [
    {
        url : "https://pocketme.in/assets/images/service-icon-01.png",
        title : "Lowest Interest Rates",
        description : "Get personal loans for multiple purposes at the lowest interest rates."
    },
    {
        url : "https://pocketme.in/assets/images/service-icon-02.png",
        title : "100% Paperless",
        description : "Get a personal loan completely online. No paperwork or physical documentation is required."
    },
    {
        url : "https://pocketme.in/assets/images/service-icon-03.png",
        title : "Fast Processing and Disbursal",
        description : "Apply online, check your eligibility, and get money directly in your bank in less than 24 hours"
    },
    {
        url : "https://pocketme.in/assets/images/service-icon-04.png",
        title : "Safe, Secure and Transparent",
        description : "Our loan application process is fully secured and safe and there are no hidden charges."
    }
];


function WhyPocketme(){
    return (
    <div>
        <div className="px-20 my-20">
            <div className="text-center my-5 text-3xl font-bold">
                Why Pocketme
            </div>
            <img className="mx-auto mb-10" src="https://pocketme.in/assets/images/heading-line-dec.png" alt="" />
            <div className="flex">
                {cards.map((item) => (
                    <Card url={item.url} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    </div>
    )
}


export default WhyPocketme;