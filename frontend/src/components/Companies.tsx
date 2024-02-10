import Company from "./Company"

export default function Companies() {
    const data = [
        {
            src: "https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"
        },
        {
            src: "https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg"
        },
        {
            src: "https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"
        },
        {
            src: "https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
        },
        {
            src: "https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg"
        },
        {
            src: "https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg"
        },
        {
            src: "https://s.udemycdn.com/partner-logos/ou-v1/citi.svg"
        },
        {
            src: "https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg"
        }
    ]

    return (
        <div className="flex justify-center bg-slate-100">
            <div className="flex flex-col py-10">
                <div className="mb-10 text-center">
                Trusted by over 15,000 companies and millions of learners around the world
                </div>
                <div className="flex gap-11">
                    {data.map((d) => (
                        <Company src={d.src}/>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}