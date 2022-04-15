import React, { useState, useContext } from 'react';
import { Button, Checkbox, Container, Form, Input, Message } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import MyContext from './MyContext';

function LoginForm() {
  const navigate = useNavigate();

  const myCtx = useContext(MyContext);

  let retrievedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLogin = () => {
    if (
      username !== '' &&
      password !== '' &&
      username === retrievedUserInfo.username &&
      password === retrievedUserInfo.password
    ) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        myCtx.setIsLogin(!myCtx.isLogin);
        navigate('/');
        document.querySelector('body').style.display = 'block';
      }, 1000);
      setUsername('');
      setPassword('');
      localStorage.setItem('stayLogin', myCtx.stayLogin);
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <Container fluid className='form-container'>
        <Form loading={isLoading} error={isError}>
          <Form.Field required>
            <label>Username</label>
            <Input
              icon='user'
              iconPosition='left'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <Input
              icon='lock'
              iconPosition='left'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Message
              error
              header={retrievedUserInfo === null ? 'Password doesn\'t exist' : 'Password is incorrect'}
              content={retrievedUserInfo === null ? 'Please register an account before sign in' : 'Make sure you have typed your password right'}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Stay login' onChange={()=> myCtx.setStayLogin(true)}/>
          </Form.Field>
          <Button secondary type='submit' onClick={handleLogin}>
            Login
          </Button>
        </Form>
      </Container>
      <Container textAlign='center'>
        <span className='login-text' onClick={() => navigate('/register')}>
          Create a new account
        </span>
      </Container>
    </>
  );
}

export default LoginForm;
