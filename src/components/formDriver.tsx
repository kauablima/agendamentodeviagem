interface Formulario {
  children: string
}

export const FormMoto = ({children}: Formulario) => {

  

  return (
    <div className="flex flex-col justify-center items-center gap-2">
        <label htmlFor="name" className="font-primary font-medium text-md text-black">{children}</label>
        <button className="bg-white text-primary border-2 border-black 
        w-[230px] h-[48px] py-[9px] px-[23px]
        mb-4 rounded-2xl
        ">Faça upload do arquivo</button>
    </div>
  )
}