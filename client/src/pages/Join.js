import React, { useState } from 'react';

import CenterContainer from '../components/shared/CenterContainer';
import Card from '../components/shared/Card'
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';

const Join = () => {
  const [isLoginMode, setLoginMode] = useState(true);

  const switchMode = () => {setLoginMode(prevMode => !prevMode)}
  
  return (
    <CenterContainer>
    <Card>
      
      <h2>{isLoginMode ? 'Log In' : 'Sign In'}</h2>
      <hr />
      <form>
        <Input label='ID' type='text' required/>
        <Input label='Password' type='password' required/>
        <Button type='submit'>{isLoginMode ? 'Login' : 'Signin'}</Button>
      </form>
        <Button onClick={switchMode}>Switch to {isLoginMode ? 'Sign in' : 'Log in'}</Button>

    </Card>
    </CenterContainer>
  )
}

export default Join;