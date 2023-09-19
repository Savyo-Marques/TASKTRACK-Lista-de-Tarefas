import PaginaInicial from './Inicial/PaginaInicial.js';
import PaginaCadastrarTarefas from './CadastrarTarefas/PaginaCadastrarTarefas.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaInicial/>}/>
        <Route path='/CadastrarTarefas' element={<PaginaCadastrarTarefas/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
