import { heroBg } from "../../../assets"


const Hero = () => {
  return (
    <div className="">
     <div className="w-100%">
        <img src={heroBg} alt="hero"
          className="object-cover w-full h-[32rem]" />
      </div>
    </div>
  )
}

export default Hero;
