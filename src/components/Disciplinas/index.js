import './style.css'
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Modal from '../Modal';

function Disciplinas() {
    const [disciplinas, setDisciplinas] = useState([]);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    useEffect(() => {
        async function fetchDisciplinas(){
            try{
                const response = await axios.get('http://localhost:8000/disciplinas');
                setDisciplinas(response.data);
            } catch (error){
                console.error('erro ao buscar disciplinas', error);
                setError(error.message)
            }
        }
        fetchDisciplinas();
    }, []);
        // fazer a funcao de post 
        const handleSave = async (newDisciplina) => {
          try {
            const response = await axios.post('http://localhost:8000/disciplinas', newDisciplina);
            if (response.status ===201){
                setDisciplinas([...disciplinas, {...newDisciplina, id:response.data.id}]);
            }
          } catch(error) {
            console.error('Erro ao adicionar disciplina:', error);
        }
    }; 

   return(
        <div className="container-disciplinas">
            <h1>Lista de disciplinas</h1>
            {error && <p style={{ color:'red'}}> Erro ao buscar disciplinas: {error}</p>}
            <ul className='disciplina-list'>
                {disciplinas.map((disciplinas) => (
                    <li key={disciplinas.id}>
                        <p><strong>Nome:</strong> {disciplinas.nome}</p>
                        <p><strong>Carga horária:</strong> {disciplinas.cargahoraria}</p>
                        <p><strong>Professor:</strong> {disciplinas.professor}</p>
                    </li>
                ))}
            </ul>
             <button
                    className='button-add-disciplina' 
                    onClick={() => setIsModalOpen(true)}> 
                    Adicionar nova disciplinas </button>
                    {isModalOpen && (
                        <Modal
                            title= "Adicionar nova disciplina"
                            fields={[
                                {name: 'nome', type: 'text', placeholder: 'Nome da disciplina'},
                                {name: 'cargahoraria', type: 'text', placeholder: 'Carga Horaria'},
                                {name: 'professor', type: 'text', placeholder: 'Professor'},
                            ]}
                            onClose={() => setIsModalOpen(false)}
                            onSave={handleSave}
                        />
                    )}
             </div>
          );
}

export default Disciplinas