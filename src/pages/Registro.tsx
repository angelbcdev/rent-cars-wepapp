import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postUser } from "../redux/UserSlice";
import { useAppDispatch } from "../redux/store";



interface IFormData {
  nombre: string;
  apellido: string;
  email: string;
  nacionalidad: string;
  tipoDocumento: string;
  numeroDocumento: string;
  numeroTelefono: string;
  contrasena: string;
  confirmarContrasena: string;
}



export default function Registro() {
  const [formData, setFormData] = useState<IFormData>({
    nombre: "",
    apellido: "",
    email: "",
    nacionalidad: "",
    tipoDocumento: "DNI",
    numeroDocumento: "",
    numeroTelefono: "",
    contrasena: "",
    confirmarContrasena: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<IFormData>>({});

  const dispatch = useAppDispatch();
 
  const navigate = useNavigate();
 

  const validateForm = () => {
    const errors: Partial<IFormData> = {};
    if (!formData.nombre.trim()) {
      errors.nombre = "Nombre es requerido";
    }
    if (!formData.apellido.trim()) {
      errors.apellido = "Apellido es requerido";
    }
    if (!formData.email.trim()) {
      errors.email = "Email es requerido";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Ingrese un email válido";
    }
    if (!formData.nacionalidad.trim()) {
      errors.nacionalidad = "Nacionalidad es requerida";
    }
    if (!formData.numeroDocumento.trim()) {
      errors.numeroDocumento = "Número de Documento es requerido";
    }
    if (!formData.numeroTelefono.trim()) {
      errors.numeroTelefono = "Número de Teléfono es requerido";
    } else if (!/^\d+$/.test(formData.numeroTelefono)) {
      errors.numeroTelefono = "Ingrese solo números";
    }
    if (!formData.contrasena.trim()) {
      errors.contrasena = "Contraseña es requerida";
    } else if (formData.contrasena.length < 6) {
      errors.contrasena = "La contraseña debe tener al menos 6 caracteres";
    }
    if (formData.contrasena !== formData.confirmarContrasena) {
      errors.confirmarContrasena = "Las contraseñas no coinciden";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      const dataRegister = {
        email: formData.email,
        password: formData.contrasena,
        name: formData.nombre,
        lastName: formData.apellido,
        identification: formData.tipoDocumento,
        identificationNumber: formData.numeroDocumento,
        country: formData.nacionalidad,
        phoneNumber: formData.numeroTelefono,
      };

     
      dispatch(postUser(dataRegister));
      navigate("/");
      
      
      
      
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="my-[63px] w-[330px] lg:w-[1062px] flex items-center justify-center flex-col Gradient-T rounded-2xl px-[20px] pb-[30px]">
      <h3 className=" my-[20px] text-background text-[32px] text-xl">
        Registro
      </h3>
      <form
        className="flex flex-col items-center justify-center w-full gap-4 lg:gap-5 bg-background py-9"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4 text-center">
          <p className="lg:text-2xl ">
            Entre su información para crear una cuenta
          </p>
          <p className="text-xs ">
            {" "}
            Los campos marcados con un asterisco (<span className="text-red-500">*</span>) son obligatorios.
          </p>
        </div>
        <section className=" relative right-20 ">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[67px] w-[243px]">
          <div className="flex flex-col w-full lg:w-[450px] gap-2">
            <label htmlFor="nombre">Nombre <span className="text-red-500">*</span></label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChangeInput}
              placeholder="Juan"
            />
            {formErrors.nombre && (
              <span className="text-red-500">{formErrors.nombre}</span>
            )}
          </div>
          <div className="flex flex-col w-full lg:w-[450px] gap-2">
            <label htmlFor="apellido">Apellido <span className="text-red-500">*</span></label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChangeInput}
              placeholder="Perez"
            />
            {formErrors.apellido && (
              <span className="text-red-500">{formErrors.apellido}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[67px] w-[243px]">
          <div className="flex flex-col w-full lg:w-[450px] gap-2">
            <label htmlFor="email">Email <span className="text-red-500">*</span></label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChangeInput}
              placeholder="example@example.com"
            />
            {formErrors.email && (
              <span className="text-red-500">{formErrors.email}</span>
            )}
          </div>
          <div className="flex flex-col w-full lg:w-[450px] gap-2">
            <label htmlFor="nacionalidad">Nacionalidad <span className="text-red-500">*</span></label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="nacionalidad"
              name="nacionalidad"
              value={formData.nacionalidad}
              onChange={handleChangeInput}
              placeholder="Argentino"
            />
            {formErrors.nacionalidad && (
              <span className="text-red-500">{formErrors.nacionalidad}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[67px] w-[243px]">
          <div className="flex flex-col w-full lg:w-[450px] gap-2">
            <label htmlFor="tipoDocumento">Tipo de Documento <span className="text-red-500">*</span></label>
            <select
              className="py-4 pl-6 border border-black rounded bg-background"
              id="tipoDocumento"
              name="tipoDocumento"
              value={formData.tipoDocumento}
              onChange={handleChangeDropdown}
            >
              <option value="DNI">Cedula</option>
              <option value="PASSPORT">Pasaporte</option>
              <option value="Otros">Otros</option>
            </select>
          </div>
          <div className="flex flex-col w-full lg:w-[450px] gap-2">
            <label htmlFor="numeroDocumento">Número de Documento <span className="text-red-500">*</span></label>
            <input
              className="py-3 pl-7 border relative top-6 border-black rounded bg-background"
              id="numeroDocumento"
              name="numeroDocumento"
              value={formData.numeroDocumento}
              onChange={handleChangeInput}
            />
            {formErrors.numeroDocumento && (
              <span className="text-red-500">{formErrors.numeroDocumento}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col  gap-4 lg:gap-[67px] w-[243px]">
          <div className="flex flex-col w-full lg:w-[450px] gap-2">
            <label htmlFor="numeroTelefono">Número de Teléfono <span className="text-red-500">*</span></label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="numeroTelefono"
              name="numeroTelefono"
              value={formData.numeroTelefono}
              onChange={handleChangeInput}
            />
            {formErrors.numeroTelefono && (
              <span className="text-red-500">{formErrors.numeroTelefono}</span>
            )}
          </div>
          <div className="flex flex-col gap-4 lg:gap-10">
            <div className="flex flex-col w-full lg:w-[450px] gap-2">
              <label htmlFor="contrasena">Contraseña <span className="text-red-500">*</span></label>
              <input
                className="py-4 pl-6 border border-black rounded bg-background"
                id="contrasena"
                name="contrasena"
                type="password"
                value={formData.contrasena}
                onChange={handleChangeInput}
              />
              {formErrors.contrasena && (
                <span className="text-red-500">{formErrors.contrasena}</span>
              )}
            </div>
            <div className="flex flex-col w-full lg:w-[450px] gap-2">
              <label htmlFor="confirmarContrasena">
                Confirmar Contraseña <span className="text-red-500">*</span>
              </label>
              <input
                className="py-4 pl-6 border border-black rounded bg-background"
                id="confirmarContrasena"
                name="confirmarContrasena"
                type="password"
                value={formData.confirmarContrasena}
                onChange={handleChangeInput}
              />
              {formErrors.confirmarContrasena && (
                <span className="text-red-500">
                  {formErrors.confirmarContrasena}
                </span>
              )}
            </div>
          </div>
        </div>
        
        </section>
        <div className="flex flex-col items-center gap-5">
          <p className="text-sm ">
            Ya tienes una cuenta? <Link to="/login" className="hover:text-red-500 hover:cursor-pointer">Iniciar sesión</Link>
          </p>

          <button className=" w-[252px] p-1 rounded-md Gradient-T">
            <div className="flex items-center justify-center px-12 py-5 text-xl text-background">
              Registrarme
            </div>
          </button>
        </div>
      </form>
    </section>
  );
}
