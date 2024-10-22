import { useNavigate } from "react-router-dom";

interface Props {
  id: number,
  imagen: string, 
  descripcion: string
}

const CardDestinoTurismo = ({id, imagen, descripcion}: Props) => {

  const navigator = useNavigate();
  const handleClick =(id:number)=>{
    navigator(`/DestinationDetail/${id}`)
  };

  return (
    <div onClick={()=>{handleClick(id)}} className=' px-6 flex flex-col items-center w-[211px] h-[167px] cursor-pointer'>
      <img className="mt-[12px] w-[240px] h-[120px] rounded-[10px]" src={imagen} />
      <p className="mt-2 text-[#B81C00] text-sm text-center">Que hacer en  {descripcion}?</p>
    </div>
  )
}
  
export default CardDestinoTurismo