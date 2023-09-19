import React, { useEffect, useState } from 'react';
import './PaginaCadastrarTarefas.css';

function PaginaCadastrarTarefas() {

  const [tarefa, setTarefa] = useState ([])
  const [novaTarefa, setNovaTarefa] = useState ('')

  useEffect(() => {
    const histTarefa = localStorage.getItem('tarefa')
    if(histTarefa !== null){
      try{
        setTarefa(JSON.parse(histTarefa))
      } catch (error){
        console.error('Erro', error)
      }
    }
  }, [])

  const salvarTarefaLocalStorage = (tarefaData) => {
    localStorage.setItem('tarefa', JSON.stringify(tarefaData));
  };

  const addTarefa = () =>{
    if(novaTarefa.trim() !== ''){
      const novaTarefaSalva = [...tarefa, {descricao: novaTarefa, tarefaMarcada: false}]
      setTarefa(novaTarefaSalva)
      setNovaTarefa('')
      salvarTarefaLocalStorage(novaTarefaSalva)
    }
  };

  const excluirTodasTarefas = () => {
    setTarefa([])
    salvarTarefaLocalStorage([])
  };

  const alterarEstadoTarefa = (index) => {
    const nvTarefa = [...tarefa]
    nvTarefa[index].tarefaMarcada = !nvTarefa[index].tarefaMarcada
    setTarefa(nvTarefa)
    salvarTarefaLocalStorage(nvTarefa)
  }

  const excluirTarefaMarcada = () => {
    const tarefaNaoMarcada = tarefa.filter((tarefa) => !tarefa.tarefaMarcada)
    setTarefa(tarefaNaoMarcada)
    salvarTarefaLocalStorage(tarefaNaoMarcada)
  }

  return (
    <div>
      <div className='bloco-cadastrar'>

        <div className='bloco-titulo-1'>
          <h1 className='t1'>Adicione uma Tarefa:</h1>
        </div>
          
        <div className='bloco-formulario'>
          <form>
            <div>
              <label className='d1'>Descrição:</label>
              <div className='bloco-input'>
                <input 
                  type = 'text' 
                  id = 'campo-info' 
                  placeholder = ' Descreva sua tarefa '
                  value={novaTarefa}
                  onChange={(event) => setNovaTarefa (event.target.value)}
                />
              </div>
            </div>
          </form>
        </div>

        <div className='bloco-botoes'>
          <h3 className='t1'> Escolha uma Opção: </h3>

          <button className='bt1' onClick={addTarefa}> Adicionar Tarefa </button>
          <button className='bt2' onClick={excluirTodasTarefas}> Excluir Todas as Tarefas </button>
          <button className='bt2' onClick={excluirTarefaMarcada}> Excluir Tarefa Marcada </button>
        </div>
      </div>

      <div className='bloco-tarefas'>

        <div className='bloco-titulo-2'>
          <h2 className='t2'> Suas Tarefas: </h2>
        </div>

        <div className='tarefa-container'>
          {tarefa.map((tarefa, index) => (
            <div className={`bloco-post-it ${tarefa.tarefaMarcada ? 'marcado' : ''}`} key={index}>
              <input
                id='info'
                type='checkbox'
                checked={tarefa.tarefaMarcada}
                onChange={() => alterarEstadoTarefa(index)}
              />
              <span>{tarefa.descricao}</span> 
            </div>
          ))}
        </div>
    
      </div>
    </div>

  );
}

export default PaginaCadastrarTarefas;