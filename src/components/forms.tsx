
interface Formulario {
  type: React.HTMLInputTypeAttribute
  name: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  error?: string
  icon?: 'email' | 'password'
}

export const Forms = ({ type, name, value, onChange, placeholder, error, icon}:Formulario ) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <input 
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-white text-black text-center placeholder-color-placeholder
          px-12 py-[24] border-b-1 border-b-black focus:ring-blue-500 
          ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  )
}
