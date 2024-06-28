import './style.css'
import { Link } from 'react-router-dom'
const textOpcoes =['ALUNOS','DISCIPLINAS']


function OpcoesHeader () {
    return (
        <ul className='opcoes'>
            {textOpcoes.map ((texto, index) =>(
                <li key={index} className='opcao'>
                    <Link to={index === 0 ? '/alunos' : '/disciplinas'}>{texto}</Link>
                </li>


            ))}
        </ul>
    )
}
export default OpcoesHeader