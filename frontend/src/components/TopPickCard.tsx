
export default function TopPickCard() {

    return (
        <div className="flex justify-center my-8">
            <div className="w-10/12">
                <div className="font-bold text-4xl mb-3">What to learn next</div>
                <div className="font-bold text-2xl mb-3">Our top pick for you</div>
                <div className="flex border-2 p-7">
                    <div>
                        <img src="https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg" alt="image"/>
                    </div>
                    <div className="ml-4 w-3/6 ">
                        <div className="font-bold text-2xl mb-2">
                            100 Days of Code: The Complete Python Pro Bootcamp
                        </div>
                        <div className="mb-2">
                            Master Python by building 100 projects in 100 days. 
                            Learn data science, automation, build websites, games and apps!
                        </div>
                        <div className="text-slate-500 text-sm">
                            By Dr.Angela Yu
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}