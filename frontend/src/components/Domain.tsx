import PythonAndWeb from "./PythonAndWeb"

export default function Domain({id}: {id: number}) {

    const python = [
        {
            src:"https://img-c.udemycdn.com/course/480x270/1495788_1aaa_2.jpg", 
            name:"Learn to Code in Python 3", 
            author:"Ivan", 
            price:"$20.66"
        },
        {
            src:"https://img-c.udemycdn.com/course/480x270/692188_9da7_34.jpg",
            name:"Python Mega Course",
            author:"Ardit",
            price:"$40.11"
        },
        {
            src:"https://img-c.udemycdn.com/course/240x135/2861796_b954.jpg",
            name: "Python And Django",
            author: "Horizon Tech", 
            price: "$20.12"
        },
        {
            src: "https://img-c.udemycdn.com/course/240x135/3378022_637b.jpg",
            name: "Horizon Tech",
            author: "Kirill Eren", 
            price: "$19.99",
        },
        {
            src: "https://img-c.udemycdn.com/course/240x135/3495852_8004.jpg", 
            name: "Python For Beginners",
            author: "Tech",
            price: "$16.12"
        },
    ]

    const web = [
        {
            src: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg",
            name: "Complete Web development",
            author: "Dr. Angela Yu", 
            price: "$29.99",
        },
        {
            src: "https://img-c.udemycdn.com/course/480x270/625204_436a_3.jpg",
            name: "The Web developer",
            author: "Colt", 
            price: "$30.33",
        },
        {
            src: "https://img-c.udemycdn.com/course/480x270/965528_737d_7.jpg",
            name: "Web Developer Master Class",
            author: "YouAccel", 
            price: "$29.11",
        },
        {
            src: "https://img-c.udemycdn.com/course/480x270/764164_de03_5.jpg",
            name: "Web 3.0",
            author: "Rob", 
            price: "$29.11",
        },
        {
            src: "https://img-c.udemycdn.com/course/480x270/2488654_e156_3.jpg",
            name: "Full Stack PHP",
            author: "Srini", 
            price: "$59.00",
        },
    ]

    const AWS = [
        {
            src: "https://img-c.udemycdn.com/course/480x270/3142166_a637_3.jpg",
            name: "Ultimate AWS",
            author: "Stephane", 
            price: "$28.10",
        },
        {
            src: "https://img-c.udemycdn.com/course/480x270/1047846_83ef_29.jpg",
            name: "Amazon Web Services",
            author: "BackSpace", 
            price: "$42.01",
        },
        {
            src: "https://img-c.udemycdn.com/course/480x270/2645936_2526_7.jpg",
            name: "AWS Certified Cloud",
            author: "Neal Davis", 
            price: "$32.08",
        },
        {
            src: "https://img-c.udemycdn.com/course/480x270/1241254_9cc1.jpg",
            name: "AWS Serverless",
            author: "Academind", 
            price: "$34.78",
        },
        {
            src: "https://img-c.udemycdn.com/course/480x270/3259902_baf5_3.jpg",
            name: "AWS Techinical",
            author: "Rajesh", 
            price: "$26.69",
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
                    datas={web}
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
                                datas={AWS}
                />
            </div>
        )
    }
}