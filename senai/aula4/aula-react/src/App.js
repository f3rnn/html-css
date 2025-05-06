import { useState } from 'react';
import './App.css';
import logo from './logo.png'

function App() {
  // permite adicionar estado ao componente (monitorar mudanças no conteúdo)
  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const handleKeyDown = (event) =>{
    if (event.key === 'Enter') {
      adicionarUsuario()
    }
  }

  const adicionarUsuario = () => {
    // verificando se novo usuário já existe na lista
    if (usuarios.includes(usuario)) {
      alert('Usuário já existe na lista');
      return;
    }

    setUsuarios([...usuarios, usuario]); // adicionar novo usuário na lista, mantendo os anteriores
    setUsuario(''); // limpar campo de entrada
  }

  return (
    <div className='App'>
      <img src={logo} alt='logo da empresa' className='logo'></img>
      <hr/>
      <h2>Adicionar um usuário</h2>
      <input
        type='text'
        placeholder='Digite o nome do usuário'
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={adicionarUsuario}>Adicionar</button>
      <hr/>
      <h2>Lista de usuários</h2>
      <ol>
        {usuarios.map((usuario, index) => (
        <li key={index}>{usuario}</li>
      ))}
      </ol>
    </div>
  );
}

export default App;
