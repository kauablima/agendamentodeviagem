import { Button } from "../../components/Button";

const Login = () => {
  return (
   <div className="flex flex-col justify-center items-center font-primary text-center">
      
      <img className="mt-12 h-52 w-52 md:h-55 md:w-55" src="src/assets/logo.png" alt="seja bem vindo" />
      <label className="mb-10 text-4xl font-semibold">Seja Bem-Vindo(a)!</label>

      <div className="flex flex-col items-center bg-white bg-center gap-3">

        <label className="text-xl">Já tem uma conta?</label>
        <Button color="primary" >Fazer Login</Button>
        <label className="text-xl">Novo por aqui?</label>
        <Button color="primary" >Criar Conta</Button>

        <label className="text-xl"> OU </label>

        <Button color="secundary" icon="google" >Continuar com Google</Button>
        
      </div>
    </div>
  )
}

export default Login;
