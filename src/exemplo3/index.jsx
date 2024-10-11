import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario,setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuario(dados);
    };
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        { usuario.map((user, index) => (
       <li key={index}>
       {user.name.first} {user.name.last}
        </li> 
        ))}
      </ul>
    </>
  );
}
