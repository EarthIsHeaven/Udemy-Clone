
export default function Instructor() {

    return (
        <div className="flex justify-center mb-20">
            <div className="flex w-7/12">
                <div className="mr-20">
                    <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" 
                    alt="img"/>
                </div>
                <div className="w-3/6 flex items-center">
                    <div>
                        <div className="text-3xl font-bold mb-3">Become an instructor</div>
                        <div className="mb-3">Instructors from around the world teach millions of learners on Udemy. 
                            We provide the tools and skills to teach what you love.
                        </div>
                        <div>
                            <button className="border bg-gray-950 font-bold p-3 text-white">Start teaching today</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}