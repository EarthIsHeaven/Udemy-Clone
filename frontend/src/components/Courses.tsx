import Course from "./Course"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Courses() {
    const data =[
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

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };


    return(
        <div className="flex justify-center mb-10">
            <div className="w-10/12">
                <div className="font-bold text-2xl mb-3">
                    Learners are viewing
                </div>
                <div>

                <Slider {...settings}>
                    {data.map((d) => (
                        <Course src={d.src}
                                name={d.name}
                                author={d.author}
                                price={d.price}
                        />
                    ))}
                </Slider>

                </div>
            </div>
        </div>
    )
}

