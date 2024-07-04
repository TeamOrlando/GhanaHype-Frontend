import { Link, useNavigate } from "react-router-dom"
import K from "../constants"
import { logo } from "../assets";



const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between px-16 py-6 items-center">
      <span><img src={logo} alt="logo" className="h-[45px]"/></span>
      <div className="flex gap-x-10 items-center">
        {
          K.NAVLINKS.map(
            (item, index) => {
              return <Link key={index} to={item.path}>{item.name}</Link>
            }
          )
        }
        <button className="border-2 px-4 py-2 border-[#C2B931]" onClick={()=> navigate("/manage-events")}>Manage Events</button>
        <button className=" px-4 py-2 bg-[#C2B931] text-black"  onClick={()=> navigate("/create-events")}>Create Events</button>
      </div>
    </div>
  )
}

export default Navbar