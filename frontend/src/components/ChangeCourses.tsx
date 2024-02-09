import { useState } from "react"
import Domain from "./Domain";

export default function ChangeCourses() {
    const [heading, setHeading] = useState(1);

    return (
        <div>
            <div className="flex">
                <div className="mr-5">
                   <button onClick={()=> setHeading(1)}>Python</button>
                </div>
                <div>
                    <button onClick={()=> setHeading(2)}>Web dev</button>
                </div>
            </div>

            <Domain id={heading}/>
        </div>
    )
}

