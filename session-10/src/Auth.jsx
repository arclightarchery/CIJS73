import { Button, Container, Divider } from 'semantic-ui-react';
import { Link, Outlet } from 'react-router-dom';
import MenuBar from './MenuBar';
import { useContext, useEffect } from 'react';
import MyContext from './MyContext';

function Auth() {
  const myCtx = useContext(MyContext);
  let stayLogin = JSON.parse(localStorage.getItem('stayLogin'));

  useEffect(() => {
    if (myCtx.isLogin || stayLogin) {
      document.querySelector('body').style.display = 'block';
    } else {
      document.querySelector('body').style.display = 'flex';
    }
    console.log(stayLogin);
  }, [myCtx.isLogin, stayLogin]);

  return (
    <>
      {myCtx.isLogin || stayLogin ? (
        <>
          <MenuBar />
          <Outlet />
        </>
      ) : (
        <Container textAlign='center' className='auth-container'>
          <Link to='/login'>
            <Button fluid secondary>
              Login
            </Button>
          </Link>
          <Divider horizontal>Or</Divider>
          <Link to='/register'>
            <Button fluid secondary>
              Sign up
            </Button>
          </Link>
        </Container>
      )}
    </>
  );
}

export default Auth;
