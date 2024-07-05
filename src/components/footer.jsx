import { fbookIcon, footerLogo, igIcon, linkedinIcon, snapchatIcon, tiktokIcon, twitterIcon, whatsappIcon, youtubeIcon, } from "../assets"



const Footer = () => {
  return (

    <div className="h-80 bg-black flex flex-col gap-x-14 relative">
      <div className="h-10 bg-white "></div>
      <div className="flex justify-center">
        <img className="w-36 h-16" src={footerLogo} alt="" />
      </div>

      <p className="text-white  text-center text-xs">Discover the beauty and culture of Ghana with us. At Ghana Hype, <br />
        we provide unforgettable experiences showcasing the best of events. <br />
        Stay informed about upcoming events and tours. </p>

      <div className="flex justify-center text-white gap-x-10 mt-12 ">
        <span onClick={() => goToPageAndScroll("home")} className="cursor-pointer hover:text-yellow-300">Home</span>
        <span onClick={() => goToPageAndScroll("about")} className="cursor-pointer hover:text-yellow-300">About</span>
        <span onClick={() => goToPageAndScroll("events")} className="cursor-pointer hover:text-yellow-300">Events</span>
        <span onClick={() => goToPageAndScroll("contact")} className="cursor-pointer hover:text-yellow-300">Contact</span>
      </div>

      <div className="h-0.5 bg-white w-4/5 ml-20"></div>



      <div className="gap-x-10 flex justify-center mt-10">
        <div>
          <h3 className="text-white font-extrabold">Follow Us</h3>
        </div>

        <div className=" flex flex-row gap-x-4" >
          <img className="h-[15px]" src={fbookIcon} alt="" />
          <img className="h-[10px]" src={twitterIcon} alt="" />
          <img className="h-[15px]" src={igIcon} alt="" />
          <img className="h-[15px]" src={tiktokIcon} alt="" />
          <img className="h-[15px]" src={linkedinIcon} alt="" />
          <img className="h-[20px]" src={youtubeIcon} alt="" />
          <img className="h-[20px]" src={whatsappIcon} alt="" />
          <img className="h-[20px]" src={snapchatIcon} alt="" />
        </div>
      </div>


    </div>

  )
}

export default Footer