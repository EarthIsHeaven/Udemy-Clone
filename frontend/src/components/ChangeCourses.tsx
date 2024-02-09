import { useState } from "react"
import Domain from "./Domain";

export default function ChangeCourses() {
    const [id, setId] = useState(1);

    return (
        <div className="flex justify-center">
            <div className="w-10/12">
                <div className="font-bold text-2xl mb-4">
                    A broad selection of courses
                </div>
                <div className="font-medium text-lg mb-4">
                    Choose from over 210,000 online video courses with 
                    new additions published every month
                </div>
                <div className="flex mb-3">
                    <div className="mr-5">
                        <button className="hover:font-bold" onClick={()=> setId(1)}>Python</button>
                    </div>
                    <div>
                        <button className="hover:font-bold" onClick={()=> setId(2)}>Web Development</button>
                    </div>
                </div>
                <div className="border-2 p-5">
                  <Domain id={id}/>
                </div>
            </div>
        </div>
    )
}

