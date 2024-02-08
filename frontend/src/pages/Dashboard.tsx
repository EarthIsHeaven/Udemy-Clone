import Header from "../components/Header"
import FrontImg from "../components/FrontImg"
import Companies from "../components/Companies"
import TopPickCard from "../components/TopPickCard"
import Courses from "../components/Courses"

export default function Dashboard() {
    return (
        <div>
            <Header />
            <FrontImg />
            <Companies />
            <TopPickCard />
            <Courses />
        </div>
    )
}