import { Link } from "react-router-dom"
import K from "../constants"


const Navbar = () => {
  return (
    <div>
      <span>logo</span>
      <div>
        {
          K.NAVLINKS.map(
            (item, index) => {
              return <Link key={index} to={item.path}>{item.name}</Link>
            }
          )
        }
      </div>
    </div>
  )
}

export default Navbar