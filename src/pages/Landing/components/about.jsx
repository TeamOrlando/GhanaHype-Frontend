import { about } from "../../../assets"

const About = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-1/2 bg-[#F2F2F2] place-content-center">
        <div className="mx-auto w-fit flex flex-col items-start gap-y-4">
          <div className="">
            <span className="">Who are we?</span>
          </div>
          <p>Ghana Hype is your ultimate event calendar, showcasing all the exciting events happening across Ghana from January to December. Stay updated and never miss out on the best events in the country!</p>

        </div>
      </div>
      <div className="w-1/2">
        <img src={about} alt="hero"
          className="object-cover w-full h-full" />
      </div>

    </div>
  )
}

export default About