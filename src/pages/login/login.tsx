const Login = () => {
  return (
   <div className="">
      <img src="src/assets/logo.png" alt="seja bem vindo" />
      <label> SEJA BEM VINDO</label>
      <div className="">

        <label>Já tem uma conta?</label>
         <button className="bg-azulescuro text-2xl text-white p-7 sm:p-2 sm:text-xl">Fazer Login</button>
        <label>Novo por aqui?</label>
         <button className="bg-azulescuro text-2xl text-white p-7 sm:p-2 sm:text-xl">Criar Conta</button>

         <label className=""> OU </label>
        <button className="">Continuar com Google</button>
      </div>
    </div>
  )
}

export default Login;
