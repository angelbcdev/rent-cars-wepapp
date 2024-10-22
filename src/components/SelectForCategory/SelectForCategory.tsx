import { useEffect, useState } from "react";
import { TCarro } from "../../assets/carsInfo";
import CardShowDetail from "../CardShowDetail/CardShowDetail";

import carros  from "../../assets/carsInfo";


const SelectForCategory = () => {
  const [carrosInfo, setCarrosInfo] = useState<TCarro[]>([]);
  const [carrosCategory, setCarrosCategory] = useState<string[]>([]);
  useEffect(() => {
   
      
        const carCategory = Array.from(
          new Set(carros.map((car: TCarro) => car.category))
        );

        setCarrosCategory(carCategory as string[]);
        setCarrosInfo(carros);
      
  }, []);

  return (

    <div className="w-full h-full flex flex-wrap bg-background justify-center gap-x-7 gap-y-7 pb-7 z-0">
          {carrosCategory.map((categoría) => (
            // <p key={categoría}>{categoría}</p>
            <div className="" key={categoría}>
              <CardShowDetail
                isCategory={true}
                showCars={carrosInfo.filter(
                  (car) => car.category === categoría
                )}
              />
            </div>
          ))}
    </div>

  );
};

export default SelectForCategory;
