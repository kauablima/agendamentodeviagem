import { Button } from "../../components/Button";

const Login = () => {
  return (
   <div className="flex flex-col justify-center items-center font-primary text-center">
      
      <img className="mt-12 md:mt-8 h-68 w-68 md:h-60 md:w-60" src="src/assets/logo.png" alt="seja bem vindo" />
      <label className="mb-10 text-4xl font-semibold">Seja Bem-Vindo(a)!</label>

      <div className="flex flex-col items-center bg-white bg-center gap-3">

        <label className="text-2xl">Já tem uma conta?</label>
        <Button color="primary" lenght="long" >Fazer Login</Button>
        <label className="text-2xl">Novo por aqui?</label>
        <Button color="primary" lenght="long" >Criar Conta</Button>

        <label className="text-2xl"> OU </label>

        <Button color="secundary" icon="google" lenght="long" >Continuar com Google</Button>
        
      </div>
    </div>
  )
}

export default Login;
