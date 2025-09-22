import { useState } from "react"

type Cadastro = {
  nome: string
  email: string
  senha: string
  conSenha: string
}


const Cadastro = () => {
  return (
    <div className="">
      <img src="src/assets/logo.png" alt="seja bem vindo" />
      <div>
        <form className="">
          <input placeholder="Digite seu nome"/>
          <input placeholder="Digite seu e-mail"/>
          <input placeholder="Digite sua senha"/>
          <input placeholder="Confirme sua senha"/>
        </form>
      </div>
      <button>Cadastrar</button>
    </div>
  )
}

export default Cadastro;