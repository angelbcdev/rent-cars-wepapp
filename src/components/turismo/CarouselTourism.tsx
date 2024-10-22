
import CardDestinoTurismo from "./CardDestinoTurismo";

import { DataDestination } from "./../DestinosCard/DataDestination.interface"

interface Props {
  showSites: DataDestination[];
}

const CarouselTourism = ({ showSites }: Props) => {
 



  

  return (
    <div className="flex flex-row justify-center items-center sm:w-[1000px] bg-slate-200 rounded-2xl h-[230px]  p-4">
     
   
       
         <div className=" flex mx-auto">
          {
            showSites.slice(0,4).map((site) => {
              
                return (
                  <CardDestinoTurismo
                    key={site.id}
                    id={site.id}
                    imagen={site.images[1]}
                    descripcion={site.phase}
                  />
                )
              }
            )
          }
          </div>
      
    
     
    </div>
  );
};

export default CarouselTourism;
