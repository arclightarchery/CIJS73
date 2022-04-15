import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Container,
  Form,
  Input,
  Message,
} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  let userInfo = {
    username: '',
    password: '',
  };

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState('');
  const [isPwUnequal, setIsPwUnequal] = useState(false);

  const handleSignUp = () => {
    if (username !== '' && password !== '' && confirmPassword !== '') {
      if (password === confirmPassword) {
        userInfo.username = username;
        userInfo.password = password;
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsPwUnequal(false);
          setIsSuccess('success');
        }, 1000);
        setUsername('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setIsPwUnequal(true);
      }
    }
  };

  return (
    <>
      <Container fluid className='form-container'>
        <Form loading={isLoading} success={isSuccess} error={isPwUnequal}>
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
          </Form.Field>
          <Form.Field required>
            <label>Confirm password</label>
            <Input
              icon='lock'
              iconPosition='left'
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Message
              error
              header='Passwords do not match'
              content='Make sure you have your passwords matched'
            />
          </Form.Field>

          <Form.Field required>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button secondary type='submit' onClick={handleSignUp}>
            Sign Up
          </Button>
          <Message
            success
            header='Sign up Completed'
            content='You can now login'
          />
        </Form>
      </Container>
      <Container textAlign='center'>
        Already a member?​ ​
        <span className='login-text' onClick={() => navigate('/login')}>
          Login
        </span>
      </Container>
    </>
  );
}

export default SignUpForm;
