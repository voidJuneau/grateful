import React, { useState } from 'react';

import Card from '../components/shared/Card'
import CenterContainer from '../components/shared/CenterContainer';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';

const Join = () => {
  const [isLoginMode, setLoginMode] = useState(true);

  const switchMode = () => {setLoginMode(prevMode => !prevMode)}
  
  return (
    <CenterContainer>
    <Card>
      
      <h2>{isLoginMode ? 'Log In' : 'Sign In'}</h2>
      <form>
        <Input label='ID' type='text' />
        <Input label='Password' type='password' />
        <Button type='submit'>{isLoginMode ? 'Login' : 'Signin'}</Button>
      </form>
        <Button onClick={switchMode}>Switch to {isLoginMode ? 'Sign in' : 'Log in'}</Button>

    </Card>
    </CenterContainer>
  )
}

export default Join;