import logo from './logo.svg';
import './App.css';

function Button(){
  return(
    <button>I'm a button</button>
  )
}

const Rodgers = ()=> {
  return(
    <div>
      <h1> Rodgers</h1>
      <p>Part of the few, one of the best</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <Button  onClick = {Rodgers} />
        </h1>
        <p>
          Hello world
        </p>
     
      </header>
    </div>
  );
}

export default App;
