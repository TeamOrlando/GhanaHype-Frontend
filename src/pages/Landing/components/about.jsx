import { about } from "../../../assets"

const About = () => {
  return (
  //   
  <div className="flex flex-col md:flex-row min-h-screen bg-gray-100" id="about">
      <div className="w-full md:w-1/2 bg-[#F2F2F2] flex items-center justify-center p-8 md:p-16">
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Who are we?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Ghana Hype is your ultimate event calendar, showcasing all the exciting events happening across Ghana from January to December. Stay updated and never miss out on the best events in the country!
          </p>
          
          <blockquote className="mt-8 italic text-gray-700 border-l-4 border-yellow-400 pl-4">
            "Ghana Hype has revolutionized how we experience events in Ghana. It's a game-changer!" - Happy User
          </blockquote>
          
          <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Discover Events
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img 
          src={about} 
          alt="Ghana Hype Events" 
          className="object-cover w-full h-full"
        />
      </div>
    </div>
)
  
}

export default About