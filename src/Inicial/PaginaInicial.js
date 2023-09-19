import { useNavigate } from 'react-router-dom';
import './PaginaIncial.css';
import logo from './logo/logo.png'; 

function PaginaInicial() {

  const navegar = useNavigate ()
  const proximaPagina = () => {
    navegar('/CadastrarTarefas')
  }
  
  return (

    <div className='bloco-principal'>

      <div className='bloco-logo'>
        <img className='logo' src={logo} alt='Logo'/>
      </div>

      <h1 className='titulo'> TASKTRACK</h1>

      <div className='wrap'>
        <button className='botao' onClick={proximaPagina}> Acessar </button>
      </div>

    </div>
    
  );
}

export default PaginaInicial;