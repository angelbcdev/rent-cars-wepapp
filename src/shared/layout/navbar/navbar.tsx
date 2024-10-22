import { Link } from "react-router-dom";
import GoCar from "../../../assets/icons/GoCar.png";
import { useEffect, useState } from "react";
import bars from "../../../assets/bars.png";
import LogInArea from "../../../components/LogInArea/LogInArea";

const linkNav = [
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
const navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    window.addEventListener("load", handleClick);
  }, []);

  const handleClick = () => {    
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(false);
    }
  };

  const menu = (
    <ul onMouseLeave={() => setIsOpen(false)} className="flex absolute md:relative flex-col bg-styleMain md:justify-between  w-[50%] md:w-full text-[12px] md:flex-row lg:text-[16px] gap-3 top-[80px] md:top-0 right-[0px]">
      
      
      {
        linkNav.map((link) => (
          <Link
            key={link.name}
            onClick={handleClick}
            to={link.link}
            className=" text-right  md:text-center pr-3 md:pr-0 py-3 hover:bg-text md:py-0 hover:md:bg-styleMain text-white  hover:bg-styleMain/50  hover:text-red-500"
          >
            {link.name}
          </Link>
        ))
      }
      
      
      
      
     
    
    </ul>
  );

  return (
    <header className="w-full bg-styleMain flex justify-center sticky top-0 z-[45]">
      <div className=" w-full flex justify-center  shadow-lg">
        <div className="h-[80px] lg:w-[85%] w-[90%] flex items-center justify-between ">
          <Link to="/">
            <img
              src={'public/logoRentCAr-removebg.png'}
              alt="GoCar logo"
              className="w-[129px]  relative right-8 h-[105px] lg:w-[134px] lg:h-[100px]"
            />
          </Link>
          <div className="md:w-[60%] md:block hidden">{menu}</div>
          <LogInArea />
          <div
            onClick={()=>{handleClick()}}
            className="w-[54px] h-[42px] rounded-lg Gradient-H_hover relative cursor-pointer md:hidden flex justify-center items-center  "
          >
            <div className="w-[52px] h-[40px] bg-styleMain flex justify-center items-center rounded-lg">
              <img src={bars} alt="" className="w-[35px] h-[30px] " />
            </div>
          </div>
        </div>
      </div>
      {isOpen&&menu}
    </header>
  );
};

export default navbar;
