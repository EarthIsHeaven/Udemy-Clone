import Course from "./Course"

export default function Courses() {

    return(
        <div className="flex justify-center">
            <div className="w-10/12">
                <div className="font-bold text-2xl mb-3">
                    Learners are viewing
                </div>
                <div className="flex gap-4">
                    <Course src="https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg" 
                            name="Ultimate AWS Certificate" 
                            author="Stephane Maarek" 
                            price="$5"
                    />
                    <Course src="https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg" 
                            name="Ultimate AWS Certificate" 
                            author="Stephane Maarek" 
                            price="$5"
                    />
                    <Course src="https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg" 
                            name="Ultimate AWS Certificate" 
                            author="Stephane Maarek" 
                            price="$5"
                    />
                    <Course src="https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg" 
                            name="Ultimate AWS Certificate" 
                            author="Stephane Maarek" 
                            price="$5"
                    />
                    <Course src="https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg" 
                            name="Ultimate AWS Certificate" 
                            author="Stephane Maarek" 
                            price="$5"
                    />
                </div>
            </div>
        </div>
    )
}