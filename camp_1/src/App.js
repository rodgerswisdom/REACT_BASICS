import logo from './logo.svg';
import './App.css';

function Button(){
  return(
    <button>I'm a button</button>
  )
}

const Person = {
  name : 'Rodgers',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  mageSize: 90,
};

function myheader(){
  return(
   
      <ul>
        <li>Home</li>
        <li>Contact us</li>
        <li>About us</li>
      </ul>
  );
}

function App() {
  return (
    <div className="App">
      <myheader>
      <h1>{Person.name}</h1>
      
        <h1>
         
        </h1>
      <img 
        src ={Person.imageUrl}
        style={{
          width: Person.mageSize,
          height: Person.mageSize
        }}
      />
    </div>
  );
}

export default App;
