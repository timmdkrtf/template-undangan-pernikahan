import Home from "../components/Home"
import Quote from "../components/Quote"
import Story from "../components/Story"
import Event from "../components/Events"
import Schedule from "../components/Schedule"
import Gallery from "../components/Gallery"
import Gift from "../components/Gift"

export default function Landing(){
    return(
        <>
            <Home />
            <Quote />
            <Story />
            <Event />
            <Schedule />
            <Gallery />
            <Gift />
        </>
    );
}