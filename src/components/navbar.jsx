import { Link } from "react-router-dom"
import K from "../constants"


const Navbar = () => {
  return (
    <div className="flex w-full justify-between px-16 bg-slate-500 py-6 items-center">
      <span>logo</span>
      <div className="flex gap-x-10 items-center">
        {
          K.NAVLINKS.map(
            (item, index) => {
              return <Link key={index} to={item.path}>{item.name}</Link>
            }
          )
        }
        <button className="border-2 px-4 py-2 border-white">Manage Events</button>
        <button className=" px-4 py-2 bg-white text-black">Create Events</button>
      </div>
    </div>
  )
}

export default Navbar