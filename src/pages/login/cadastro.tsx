import { useState } from "react";
import { Button } from "../../components/Button";
import { Forms } from "../../components/forms";

export const Cadastro = () => {      
  const [lembrarDeMim, setLembrarDeMim] = useState(false);
  
  const handleLembrarDeMimChange = () => {
    setLembrarDeMim(!lembrarDeMim)
  }

  return (
    <div className="flex flex-col justify-center items-center  ">
      <img className="mt-6 md:mt-8 h-48 w-48" src="src/assets/logo.png" alt="seja bem vindo" />
      <label className="mb-6 text-4xl font-semibold">Criar conta</label>

      <div className="flex flex-row gap-x-3 mb-6">
        <button className="flex flex-row justify-center items-center font-primary font-semibold 
        rounded-2xl text-xl bg-primary text-white w-[140px] h-[40px] ">Passageiro</button>
        <button className="flex flex-row justify-center items-center font-primary font-semibold 
        rounded-2xl text-xl bg-white text-primary border-2 border-primary  w-[140px] h-[40px] py-[9px] px-[23px]
        ">Motorista</button>
      </div>

      <div className="flex flex-col gap-6 mb-3">
        <Forms name="password" type="password" value="" placeholder="Digite seu nome"></Forms>
        <Forms name="email" type="email" icon='email' value="" placeholder="Digite seu email"></Forms>
        <Forms name="password" type="password" value="" placeholder="Digite sua senha"></Forms>
        <Forms name="password" type="password" value="" placeholder="Confirme sua senha"></Forms>
      </div>

      <div className="flex flex-row gap-x-6 mt-4  text-sm items-center mb-6">
        <div className=" items-center">
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
            
           
            <span className="whitespace-pre-line ml-1 font-medium text-gray-700 group-hover:text-gray-900 
            transition-colors duration-200">
              'Eu li e concordo com os termos <br></br> 
              e condições aqui apresentados'
            </span>
          </label>
        </div>
      </div>
      

      <Button color="primary" lenght="default">Login</Button>    

    </div>
  )
}


