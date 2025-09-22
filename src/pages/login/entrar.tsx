import { useState } from "react";
import { Button } from "../../components/Button";
import { Forms } from "../../components/forms";

const Entrar = () => {
  const [lembrarDeMim, setLembrarDeMim] = useState(false);

  const handleLembrarDeMimChange = () => {
    setLembrarDeMim(!lembrarDeMim);
  };

  return (
    <div className="flex flex-col justify-center items-center font-primary">
      <img className="mt-12 md:mt-8 h-68 w-68 md:h-60 md:w-60" src="src/assets/logo.png" alt="seja bem vindo" />
      <label className="mb-10 text-4xl font-semibold">Entrar</label>
      <div className="flex flex-col gap-6">
        <Forms name="email" type="email" icon='email' value="" placeholder="Digite seu email"></Forms>
        <Forms name="password" type="password" value="" placeholder="Digite sua senha"></Forms>
      </div>
      
      <div className="flex flex-row gap-x-6 mt-4 mb-7 text-sm items-center mb-12">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="lembrar-mim" 
            checked={lembrarDeMim}
            onChange={handleLembrarDeMimChange}
            className="hidden"
          />
          <label 
            htmlFor="lembrar-mim" 
            className="flex items-center cursor-pointer group"
            >
            <div className="relative">
              <div className={`w-9 h-6 rounded-full transition-colors duration-200 
              ${lembrarDeMim ? 'bg-primary' : 'bg-gray-300'} group-hover:bg-gray-400`}></div>
            
              <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md 
              transition-transform duration-200 transform 
              ${lembrarDeMim ? 'translate-x-3' : 'translate-x-0'} group-hover:scale-110`}></div>
            </div>
            
           
            <span className="ml-1 font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
              Lembrar de mim
            </span>
          </label>
        </div>
        
        <label className="underline text-neutral-600 cursor-pointer hover:text-neutral-800 transition-colors duration-200">
          Esqueceu a senha?
        </label>
      </div>

      <Button color="primary" lenght="default">Login</Button>    

      </div>
  )
}

export default Entrar;