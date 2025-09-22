interface Botao {
  text: string

}

const click = () => {
  return alert("feito")
}

const Button = ({text}: Botao) => {
  return (
    <button className="bg-azulescuro text-2xl text-white p-7 sm:p-2 sm:text-xl" onClick={click}>
      {text}
    </button>
  )
}

export default Button;