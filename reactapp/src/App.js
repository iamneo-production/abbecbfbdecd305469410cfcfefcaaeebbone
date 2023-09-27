import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';

function App() {
  const[name,setName]=useState('');
  const[greeting,setGreeting]=useState('');

  const handleChange=(event)=>{
    setName(event.target.value);
  };

  const handleSubmit=(event)=>{
    event.preventDefault();

    if(name.trim()!==''){
      setGreeting('Hello,${name}!');
    }
  }
  return (
    <div className="App">
    <h2>Hey!!! Greeting</h2>
    <form onSubmit={handleSubmit}
    </div>
  );
}

export default App;
