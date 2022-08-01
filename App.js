//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [mobile, setMobile]=useState("");
  function saveUser()
  {
    console.warn({name,email,mobile});
    let data={name,email,mobile}
    fetch("https://dummy.restapiexample.com/api/v1/create",{
      method:"POST",
      headers:{
        'Accept':'application /json',
        'Content-Type':'application /json',
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      //console.warn("result",result);
      result.json().then((resp)=>{
      console.warn("resp",resp)
      })
    })
  }
  return (
    <div className="App">
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name='name'/><br/><br/>
      <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email'/><br/><br/>
      <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name='mobile'/><br/><br/>
      <button type="button" onClick={saveUser}>Save Data</button>
    </div>
  );
}

export default App;
