import logo from './logo.svg';
import './App.css';

const user={
  id:1,
  nome: "Elisangela",
  cpf: 42283916801
}
let content;
if(user.id === 1){
  content = <ExibeNome/>
}else{
  content = <h1>Erro, usuário não encontrado</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <div>
          {user.id ===1? (
              <ExibeNome/>
            ) : (
              <h1>Erro, usuário não encontrado</h1>
            )}
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
      {user.nome}
    </h1>
  )
}
export default App;
