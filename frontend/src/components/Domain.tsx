import PythonAndWeb from "./PythonAndWeb"

export default function Domain({id}: {id: number}) {

    const python = [
        {
            src:"https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg", 
            name:"The Complete JavaScript", 
            author:"Jonas Schmed", 
            price:"$5.66"
        },
        {
            src:"https://img-c.udemycdn.com/course/480x270/3047216_4888_2.jpg",
            name:"Python for beginners",
            author:"Yassin",
            price:"$4.99"
        },
        {
            src:"https://img-c.udemycdn.com/course/480x270/793796_0e89_2.jpg",
            name: "Microsoft Excel",
            author: "Kyle Pew", 
            price: "$6.12"
        },
        {
            src: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
            name: "Machine Learning",
            author: "Kirill Eren", 
            price: "$7.011",
        },
        {
            src: "https://img-c.udemycdn.com/course/240x135/1754098_e0df_3.jpg", 
            name: "The Data Science Course",
            author: "365 Careers",
            price: "$5.77"
        },
        {
            src: "https://img-c.udemycdn.com/course/240x135/1045092_8c2f_2.jpg", 
            name: "The Art & Science",
            author: "Brent Evistor",
            price: "$30.57"
        },
        {
            src: "https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg", 
            name: "React",
            author: "Academind",
            price: "$29.33"
        },
    ]

    if(id == 1) {
        return (
            <div>
                <PythonAndWeb heading="Expand your career opportunities with Python" 
                                description="Take one of Udemy’s range of Python courses and learn 
                                how to code using this incredibly useful language. Its simple syntax and 
                                readability makes Python perfect for Flask, Django, data science, and machine learning. 
                                You’ll learn how to build everything from games to sites to apps. 
                                Choose from a range of courses that will appeal to" 
                                buttonText="Python"
                                datas = {python}
                />
            </div>
        )
    } else if(id == 2) {
        return(
            <div>
                <PythonAndWeb heading="Build websites and applications with Web Development"
                    description="The world of web development is as wide as the internet itself. 
                    Much of our social and vocational lives play out on the internet, which prompts 
                    new industries aimed at creating, managing, and debugging the websites and applications 
                    that we increasingly rely on. "
                    buttonText="Web development"
                    datas={python}
                />
            </div>
        )
    }
    
    else {

        return(
            <div>
                <PythonAndWeb heading="Become an expert in cloud computing with AWS Certification"
                                description="Amazon Web Services (AWS) is a cloud computing platform 
                                with more than 200 featured services. 
                                Whether or not you aim for certification, an AWS course offers the theory 
                                and practical skills you need to land a job in cloud development, sales, 
                                engineering, networking, and more. The better you become at cloud computing, the more"
                                buttonText="Amazon AWS"
                                datas={python}
                />
            </div>
        )
    }
}