import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postUser } from "../../../redux/UserSlice";
import { useAppDispatch } from "../../../redux/store";




interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

export const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const  dispatch  = useAppDispatch();
  const navigate = useNavigate();
  

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    // You can add your password validation logic here
    // For simplicity, let's just check if it's not empty
    return password.trim().length > 0;
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (!validateEmail(email)) {
      setErrorMessage("Ingrese un email válido");
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage("Contraseña es requerida");
      return;
    }

   
  };
  

  const userbyDefault = () =>{
    const dataRegister = {
      email: "qWQpN@example.com",
      password: "12345678",
      name: "Simple ",
      lastName: "User",
      identification: "Cedula",
      identificationNumber: "CCX480-0001234-5",
      country: "Any place",
      phoneNumber: "123456789",
    };

   
    dispatch(postUser(dataRegister));
    navigate("/");
  }

  return (
    <form
      className="my-[63px] w-[330px] xl:w-[1062px] flex items-center justify-center flex-col Gradient-T rounded-2xl px-[20px] pb-[30px]"
      onSubmit={handleSubmit}
    >
      <h3 className="my-[30px] text-background text-lg lg:text-[32px]">
        Inicio de sesión
      </h3>
      <div className="flex flex-col items-center justify-center w-full gap-10 px-5 bg-background py-9">
        <div className="flex w-full flex-col lg:w-[450px] gap-2">
          <p className="text-sm text-center">
            Los campos marcados con un asterisco (*) son obligatorios.
          </p>
          <label className="text-sm font-bold uppercase" htmlFor="email">
            Email*
          </label>
          <input
            className={`py-4 pl-6 border border-black rounded-tl-[10px] rounded-br-[10px] bg-background ${
              errorMessage && !validateEmail(email) ? "border-red-500" : ""
            }`}
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="example@example.com"
          />
          {errorMessage && !validateEmail(email) && (
            <p className="text-sm text-red-500">Ingrese un email válido</p>
          )}
        </div>
        <div className="flex w-full flex-col lg:w-[450px] gap-2">
          <label className="text-sm font-bold uppercase" htmlFor="password">
            Contraseña*
          </label>
          <input
            className={`py-4 pl-6 border border-black rounded-tl-[10px] rounded-br-[10px] bg-background ${
              errorMessage && !validatePassword(password)
                ? "border-red-500"
                : ""
            }`}
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errorMessage && !validatePassword(password) && (
            <p className="text-sm text-red-500">Contraseña es requerida</p>
          )}
          {errorMessage && errorMessage === "Email o contraseña incorrecto" && (
            <p className="text-sm text-red-500">
              Email o contraseña incorrecto
            </p>
          )}
          <p className="text-sm lg:text-base">Olvidaste tu contraseña?</p>
        </div>

        <p className="text-sm lg:text-base">
          Aun no tienes una cuenta? <Link className="hover:text-red-500 hover:cursor-pointer" to="/registro">Registrarme</Link>
        </p>
        <button
          className="w-full py-5 rounded-lg lg:px-12 lg:w-[252px] Gradient-T text-background"
          type="submit"
        >
          Iniciar sesión
        </button>
        <p
        onClick={userbyDefault}
        className="text-sm lg:text-base hover:cursor-pointer hover:text-red-500"
        >Login as simple user by default</p>
        {errorMessage && errorMessage !== "Email o contraseña incorrecto" && (
          <p className="text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    </form>
  );
};
