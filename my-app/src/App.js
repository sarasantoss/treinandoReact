import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const users=[
  {id:1, nome: "Elisangela", homem: false},
  {id:2, nome: "André", homem: false}];
let content;

function MyButton(){
  const [count, setCount] = useState(0)

  function HandleClick(){
    setCount(count + 1)
  }

  return(
    <button onClick={HandleClick}>
      clicado {count} vezes
    </button>
    
  )

  
}

const listaUsers = users.map(users =>
  <li key = {users.id} style = {{color: users.homem ? 'blue': 'red'}}>
    {users.nome}
  </li>
 )

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <div>
            <MyButton/>
          <ul>
            {listaUsers}
          </ul>
          </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function ExibeNome(){
  return(
    <h1>
      {users.nome}
    </h1>
  )
}

// Armazenando estados

export default App;
