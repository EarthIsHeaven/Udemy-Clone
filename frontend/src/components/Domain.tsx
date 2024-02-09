import PythonAndWeb from "./PythonAndWeb"

export default function Domain({id}: {id: number}) {

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
                                src="https://img-c.udemycdn.com/course/480x270/2485240_d405_7.jpg"
                                name="The Complete Python"
                                author="Jose Portilla"
                                price="$5.99"
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
                    src="https://img-c.udemycdn.com/course/240x135/764164_de03_5.jpg"
                    name="The Complete Web Developer"
                    author="Rob Percival"
                    price="$6.122"
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
                                src="https://img-c.udemycdn.com/course/240x135/3142166_a637_3.jpg"
                                name="Ultimate AWS Certificate"
                                author="Stephane Maarek"
                                price="$5.44"
                />
            </div>
        )
    }
}