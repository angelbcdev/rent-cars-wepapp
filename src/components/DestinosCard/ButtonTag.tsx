import { FaCoffee, FaSun, FaStar, FaBook,FaMap} from "react-icons/fa";

const ButtonTag =({tag,setFiltro}: { tag: string ; setFiltro?:(e:string)=>void})=>{
const isButton = setFiltro?"hover:text-white hover:bg-primary cursor-pointer transition-all duration-300 ease-linear flex justify-center items-center border-gray-800 border-2 text-gray-600 rounded-lg py-[6px] px-[10px] gap-1  "
:"text-sm flex justify-center items-center gap-4 rounded-lg py-[6px] px-[10px] gap-1 bg-gray-300/60 shadow-md  ";
const handleFiltre=()=>{
    if (setFiltro){
        setFiltro(tag)
    }
}
const icons = (tag: string)=>{
        switch (tag) {
                case 'Fiestas':
                    return <FaStar/>
                case 'Gastronomia':
                    return <FaCoffee/>
                case 'Historia':
                    return <FaBook/>
                case 'Aventura':
                    return <FaMap/>
                case 'Naturaleza':
                    return <FaSun/>
                default:
                    return null;
            }
} 

    return (
        <div onClick={handleFiltre} className={` ${isButton }   `}>
            {icons(tag)}
            {tag}
        </div>
    )
}
export default ButtonTag;