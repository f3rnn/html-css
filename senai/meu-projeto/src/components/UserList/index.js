import './styles.css'

const UserList = ({ usuarios }) => {
    return (
        <div className='user-list'>
            <h2>Lista de usuários</h2>
            <ol>
                {usuarios.map((usuario, index) => (
                    <li key={index}>{usuario}</li>
                ))}
            </ol>
        </div>
    )
}

export default UserList