import Course from "./Course"

export default function Courses() {

    return(
        <div className="flex justify-center my-5">
            <div className="w-10/12">
                <div className="font-bold text-2xl mb-3">
                    Learners are viewing
                </div>
                <div className="flex gap-4">
                    <Course src="https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg" 
                            name="Ultimate AWS Certificate" 
                            author="Stephane Maarek" 
                            price="$5.77"
                    />
                    <Course src="https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg" 
                            name="Machine Learning" 
                            author="Kirill Eren" 
                            price="$7.011"
                    />
                    <Course src="https://img-c.udemycdn.com/course/480x270/793796_0e89_2.jpg" 
                            name="Microsoft Excel" 
                            author="Kyle Pew" 
                            price="$6.12"
                    />
                    <Course src="https://img-c.udemycdn.com/course/480x270/3047216_4888_2.jpg" 
                            name="Python for beginners" 
                            author="Yassin" 
                            price="$4.99"
                    />
                    <Course src="https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg" 
                            name="The Complete JavaScript" 
                            author="Jonas Schmed" 
                            price="$5.6"
                    />
                </div>
            </div>
        </div>
    )
}