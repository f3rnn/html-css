import { useState } from "react";
import "./styles.css";

const UserInput = ({ onAddUser }) => {
    const [usuario, setUsuario] = useState('')

    const handleChange = (event) => {
        setUsuario(event.target.value)
    }

    const handleKeydown = (event) => {
        if (event.key === 'Enter'){
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        if (usuario.trim()){
            onAddUser(usuario)
            setUsuario('')
        } else {
            alert('Digite um nome de usuário')
        }
    }
    
    return (
        <div className="user-input">
            <h2>Adicionar usuário</h2>
            <input
                type="text"
                placeholder="Digite o nome do usuário"
                value={usuario}
                onChange={handleChange}
                onKeyDown={handleKeydown}
            />
            <button onClick={handleSubmit}>Adicionar</button>
        </div>
    )
}

export default UserInput