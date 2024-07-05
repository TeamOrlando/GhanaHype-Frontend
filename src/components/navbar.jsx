import {  useLocation, useNavigate } from "react-router-dom"

import { logo } from "../assets";
import * as Scroll from "react-scroll"
import { Link as ScrollLink } from "react-scroll"

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const scroller = Scroll.scroller

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true
    });
  }
  return (
    <div className="flex w-full justify-between px-16 py-6 items-center">
      <span><img src={logo} alt="logo" className="h-[60px]" /></span>
      <div className="flex gap-x-10 items-center">
        {
          pathname == "/" ? <>
            <ScrollLink to="home" spy={true} smooth={true} offset={-75} duration={500} className="cursor-pointer hover:text-yellow-400">Home</ScrollLink>
            <ScrollLink to="about" spy={true} smooth={true} offset={-75} duration={500} className="cursor-pointer hover:text-yellow-400">About</ScrollLink>
            <ScrollLink to="events" spy={true} smooth={true} offset={-75} duration={500} className="cursor-pointer hover:text-yellow-400">Events</ScrollLink>
            <ScrollLink to="contact" spy={true} smooth={true} offset={-75} duration={500} className="cursor-pointer hover:text-yellow-400">Contact</ScrollLink>
          </> :
          <>
          <span onClick={() => goToPageAndScroll("home")} className="cursor-pointer hover:text-yellow-300">Home</span>
          <span onClick={() => goToPageAndScroll("about")} className="cursor-pointer hover:text-yellow-300">About</span>
          <span onClick={() => goToPageAndScroll("events")} className="cursor-pointer hover:text-yellow-300">Events</span>
          <span onClick={() => goToPageAndScroll("contact")} className="cursor-pointer hover:text-yellow-300">Contact</span>
          </>
        }
        <button className="border-2 px-4 py-2 border-[#C2B931]" onClick={() => navigate("/manage-events")}>Manage Events</button>
        <button className=" px-4 py-2 bg-[#C2B931] text-black" onClick={() => navigate("/create-events")}>Create Events</button>
      </div>
    </div>
  )
}

export default Navbar