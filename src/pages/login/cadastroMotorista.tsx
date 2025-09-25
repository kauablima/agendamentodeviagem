import { useState } from "react";
import { Button } from "../../components/Button"
import { FormMoto } from "../../components/formDriver"


export const CadastroMotorista = ( ) => {
  const [lembrarDeMim, setLembrarDeMim] = useState(false);
  
  const handleLembrarDeMimChange = () => {
    setLembrarDeMim(!lembrarDeMim)
  }

  const handleDone = () => {
    alert(`Obrigado por se cadastrar! Nossa equipe entrará em contato com você em breve.`
    )
  }

  return (
    
    <div className=" flex flex-col  justify-center items-center mt-18">
      <div className="flex mb-3">
        <img className="bg-foto-perfil w-[120px] h-[120px] rounded-full" alt="" />
      </div>
      <div className="">
        <FormMoto>Foto de Perfil</FormMoto>
        <FormMoto>CRVL - Documento de Veículo</FormMoto>
        <FormMoto>CNH - Carteira de Motorista</FormMoto>
      </div>
      

       <div className="flex flex-row gap-x-6 mt-4  text-sm items-center mb-6 box-content ">
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
              Eu li e concordo com os termos <br></br> 
              e condições aqui apresentados
            </span>
          </label>
        </div>
      </div>


      <Button click={handleDone} color="primary" lenght="default">Cadastrar</Button>  
    </div>

  
  )
}