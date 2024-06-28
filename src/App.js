import './App.css';
import Mural from './components/Mural';
import Header from './components/header/header';
import Aluno from './components/Alunos';
import Disciplinas from './components/Disciplinas';
import NovoRegistro from './components/NovoRegistro';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
<Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/alunos' element={<Aluno />} />
          <Route path='/disciplinas' element={<Disciplinas />} />
          <Route path='/novoregistro' element={<NovoRegistro />} />
          <Route path='/' element={<Mural />} />
        </Routes>
      </div>
    </Router>
  );


  

}

export default App;
