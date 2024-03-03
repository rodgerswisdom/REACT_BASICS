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

function App() {
  return (
    <div className="App">

      <h1>{Person.name}</h1>
     
        <h1>
          <Button />
        </h1>
      <img 
        src ={Person.imageUrl}
        // style={{
        //   width: Person.mageSize,
        //   height: Person.mageSize
        // }}
      />
    </div>
  );
}

export default App;
