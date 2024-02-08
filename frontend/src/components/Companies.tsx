import Company from "./Company"

export default function Companies() {
    return (
        <div className="flex justify-center bg-slate-100">
            <div className="flex flex-col py-10">
                <div className="mb-10 text-center">
                Trusted by over 15,000 companies and millions of learners around the world
                </div>
                <div className="flex gap-11">
                    <div>
                        <Company src={"https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"} alt={"one"}/>
                    </div>
                    <div>
                        <Company src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg" alt="two"/>
                    </div>
                    <div>
                        <Company src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg" alt="three"/>
                    </div>
                    <div>
                        <Company src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
                            alt="four" />
                    </div>
                    <div>
                        <Company src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg"
                            alt="five" />
                    </div>
                    <div>
                        <Company src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg"
                            alt="six" />
                    </div>
                    <div>
                        <Company src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg"
                            alt="seven" />
                    </div>
                    <div>
                        <Company src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg"
                            alt="one" />
                    </div>
                </div>
            </div>
        </div>
    )
}