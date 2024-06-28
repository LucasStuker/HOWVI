import { useEffect, useState } from 'react'
import axios from 'axios';
import './style.css'
import Modal from '../Modal';

function Aluno() {
    const [alunos, setAlunos] = useState([]);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    useEffect(() => {
      async function fetchAlunos() {
        try {
          const response = await axios.get('http://localhost:8000/alunos');
          setAlunos(response.data);
        } catch (error) {
          console.error('Erro ao buscar alunos:', error);
          setError(error.message);
        }
      }
      fetchAlunos();
    }, []);
  
    const handleSave = async (newAluno) => {
      try {
        const response = await axios.post('http://localhost:8000/alunos', newAluno);
        if (response.status === 201) {
          const alunoID = {...newAluno, id:response.data.id};  
          setAlunos([...alunos, alunoID]);
        }
      } catch (error) {
        console.error('Erro ao adicionar aluno:', error);
      }
    };
  
    return (
      <div className="container-alunos">
        <h1>LISTA DE ALUNOS</h1>
        {error && <p style={{ color: 'red' }}>Erro ao buscar alunos: {error}</p>}
        <ul className="aluno-list">
          {alunos.map((aluno) => (
            <li key={aluno.id}>
              <p><strong>Nome:</strong> {aluno.nome}</p>
              <p><strong>Email:</strong> {aluno.email}</p>
              <p><strong>Série:</strong> {aluno.serie}</p>
            </li>
          ))}
        </ul>
        <button className="button-add-alunos" onClick={() => setIsModalOpen(true)}>
          Adicionar Novos Alunos
        </button>
        {isModalOpen && (
          <Modal
            title="Adicionar Novo Aluno"
            fields={[
              { name: 'nome', type: 'text', placeholder: 'Nome do Aluno' },
              { name: 'email', type: 'email', placeholder: 'Email' },
              { name: 'serie', type: 'text', placeholder: 'Série' }
            ]}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSave}
          />
        )}
      </div>
    );
  }
  
  export default Aluno;