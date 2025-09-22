//import { useEffect, useState } from "react";

const Entrar = () => {
 /*
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
  const handleOnline = () => setIsOnline(true);
  const handleOffline = () => setIsOnline(false);
    
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);
    
  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
  }, []);
  
  const handleLogin = (e: any) => {
    e.preventDefault();
    
    if (!isOnline) {
      alert('Você está offline. Conecte-se à internet para fazer login.');
      return;
    }
    
  };

  */
  return (
    <div className="">
      <img src="src/assets/logo.png" alt="seja bem vindo" />
      <div>
        <form>
          <input className="" placeholder="Digite seu e-mail"/>
          <input className="" placeholder="Digite sua senha"/>
        </form>
        <div>
          <label className="">lembrar da senha</label>
          <button className="">esqueceu a senha</button>
        </div>
        <button className="bg-azulescuro text-2xl text-white p-7 sm:p-2 sm:text-xl">Login</button>
      </div>
    </div>
    
  )
}

export default Entrar;