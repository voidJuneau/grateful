import React, { useState } from 'react';
import axios from 'axios';

import CenterContainer from '../components/shared/CenterContainer';
import Card from '../components/shared/Card'
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';

const Join = () => {
  const [isLoginMode, setLoginMode] = useState(true);
  const [idValue, setIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const switchMode = () => {setLoginMode(prevMode => !prevMode)}

  const submit = (e) => {
    e.preventDefault();
    if (!isLoginMode) {

    }
    
    // axios.post('http://localhost:5000/api/user/login', {
    //   userid: idValue,
    //   password: passwordValue
    // }, {
    //   'Content-Type': 'application/json'
    // }).then(res => console.log(res))
    // .catch(res=>console.log(res))

    fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      // mode: 'no-cors',
      'Content-Type': 'application/json',
      body: {
          userid: idValue,
          password: passwordValue
        }
    }).then(res=>res.json())
    .then(json=>{console.log(data)})
  }
  
  return (
    <CenterContainer>
    <Card>
      
      <h2>{isLoginMode ? 'Log In' : 'Sign In'}</h2>
      <hr />
      <form>
        <Input label='ID' type='text' value={idValue} onChange={e=>setIdValue(e.target.value)} required/>
        {!isLoginMode && <Input label='Name' type='text' value={nameValue} onChange={e=>setNameValue(e.target.value)} required/>}
        <Input label='Password' type='password' value={passwordValue} onChange={e=>setPasswordValue(e.target.value)} required/>
        <Button type='submit' onClick={submit}>{isLoginMode ? 'Login' : 'Signin'}</Button>
      </form>
        <Button onClick={switchMode}>Switch to {isLoginMode ? 'Sign in' : 'Log in'}</Button>

    </Card>
    </CenterContainer>
  )
}

export default Join;