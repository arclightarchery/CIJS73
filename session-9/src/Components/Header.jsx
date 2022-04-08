import { useContext } from 'react';
import MyContext from '../MyContext';

export default function Header({ username }) {
  const myCtx = useContext(MyContext);

  return (
    <div className='header'>
      <span className='logo'>MindX</span>
      {myCtx.language === 'English' ? (
        myCtx.isLogin ? (
          <span>Welcome, {username}</span>
        ) : (
          <label htmlFor='username'>
            <span className='login'>Login</span>
          </label>
        )
      ) : myCtx.isLogin ? (
        <span>Chào mừng, {username}</span>
      ) : (
        <label htmlFor='username'>
          <span className='login'>Đăng nhập</span>
        </label>
      )}
    </div>
  );
}
