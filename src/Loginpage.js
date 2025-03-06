import { useState } from "react";
import './Logoin.css';

function LoginPage () {
    let [userName,setUserName] = useState('');
  let [userEmail,setEmail] = useState('');
  let [gender,setGender] = useState('');
  let [number,setNumber] = useState(0);
  let [password,setPassword] = useState('');
  function handelSubmit(event) {
    event.preventDefault();
    let user={
      userName,userEmail,gender,number,password
    }
    console.log(user);
    setUserName('');
    setEmail('');
    setGender('');
    setNumber('');
    setPassword('');
  }
  return(
    <div>
      <form onSubmit={handelSubmit}> 
      <input type='text' value={userName} placeholder="Name" onChange={(e)=>{setUserName(e.target.value)}} required/>
      <input type='email' value={userEmail} placeholder="Type your Email" onChange={(e)=>{setEmail(e.target.value)}} required/>
      <label>Gender</label>
      <input type="radio" name='Gender' value={gender} onChange={(e)=>{setGender('male')}} required/>male 
      <input type='radio' name='Gender' value={gender} onChange={(e)=>{setGender('female')}} required/>female 
      <input type='number' value={number} placeholder="number" onChange={(e)=>{setNumber(e.target.value)}} required/>
      <input type='password' value={password} placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} required/>
      <input type='submit' value='register' />
      </form>
    </div>
  )
}

export default LoginPage;
