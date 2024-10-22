
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import  mailIcon  from '../../../assets/icons/mailIcon.svg'
import { desktopCapturer } from "electron";


const footerInfo = {
  title: "Demo Car Rental",
  description: "This project was created for practical purposes to demonstrate my programming skills. This is not a real car rental platform.",
}

const socialLinks = [
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <FaXTwitter />,
    link: "https://twitter.com/",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/angel-bernechea",
  },
]
const linkFooter = [
  
  {
    name: "CATEGORIAS DE VEHICULOS",
    link: "/categoriasDeVehiculos/all",
  },
  {
    name: "RED DE AGENCIAS",
    link: "/redDeAgencias",
  },
  {
    name: "TIPS DE VIAJES",
    link: "/tipsTuristicos",
  },
  {
    name: "DUDAS",
    link: "/dudas",
  }
]
const Footer = () => {
  return (
    <footer className="h-[750px] md:h-[450px] w-full bg-styleMain flex justify-center items-center">
      <div className="lg:w-[85%] w-[90%]  h-[90%] flex flex-col text-[14px] md:py-10 ">
        <div className="flex flex-col md:flex-row items-start md:justify-between w-full h-[90%] md:gap-5">
          <div className="md:w-[25%] h-[10%] md:h-[40px]">
            <Link to="/">
              <img src={'public/logoRentCAr-removebg.png'} alt="logo GoCar" className="w-[120px] md:w-[280px] h-[130px] md:h-[280px] relative bottom-16 right-8 sm:right-24" />
            </Link>
          </div>
          <div className="w-full md:w-[25%] h-[195px] flex flex-col justify-between">
           
            <ul className="text-background flex flex-col justify-around w-full h-[148px] md:pl-0 pl-3 ">
              {
                linkFooter.map((link) => (
                  <div key={link.name}
                  
                  >
                  <a
                    className="text-white w-16 h-16 hover:bg-styleMain/50  hover:text-red-500"
                    href={link.link}
                    key={link.link}
                    target="_blank"
                    
                  >
                    {link.name}
                  </a>
                  
                  </div>
                )
               
                )
              }
             
              
              
            </ul>
          </div>
          <div className="w-full md:w-[25%] h-[100px] md:h-[40%] py-5 md:py-0 flex flex-col md:justify-between ">
            <h2 className="text-white font-semibold h-[50%]">SOCIALS</h2>
            <ul className="text-white w-full h-[50%] flex md:flex-col gap-5 text-[24px] md:pl-0 pl-3">
              {
                socialLinks.map((link) => (
                  <Link
                    className=" text-white w-16 h-16 hover:bg-styleMain/50  hover:text-red-500"
                    to={link.link}
                    key={link.link}
                  >
                    {link.icon}
                    {
                      link.link == 'https://www.linkedin.com/in/angel-bernechea' && <p className="text-sm ">my linkedIn</p>
                    }
                  </Link>
                )
                )
              }
            </ul>
          </div>
          <div className="w-[70%] md:w-[25%] md:h-[85%] h-[200px] flex flex-col justify-between ">
            <div className="w-full h-[90px] flex flex-col justify-around ">
              <h3 className="text-white font-semibold md:pb-6 pb-3">{footerInfo.title}</h3>
              <p className="text-background w-full md:pl-0 pl-3">
                {footerInfo.description}
              </p>
            </div>
            <div className="w-[100%] h-[60px] md:h-[110px] flex flex-col justify-center ">
              <h3 className="text-white font-semibold">NEWS LETTER</h3>
              <div className="w-full h-[30px] flex justify-between relative md:pl-0 pl-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex justify-start w-full h-[40px] bg-[#707070] border-b-[0.75px] border-[#333333] px-2"
                />
                <img
                  src={mailIcon}
                  alt="icono mail"
                  className="absolute right-1 bottom-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-around bottom-0 h-[10%] md:h-[20px] w-full text-background text-[14px]">

          <div>
            <a href="">alberto bernechea</a>
          </div>
          <div>
            <p>-</p>
          </div>
          <div>
            <p>©  funtional wep page.</p>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;

