import { useContext } from 'react';
import MyContext from '../MyContext';

export default function Main({ value, onChange }) {
  const myCtx = useContext(MyContext);
  const handleClick = () => {
    if (value !== '') {
      myCtx.setIsLogin(!myCtx.isLogin);
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  return myCtx.language === 'English' ? (
    myCtx.isLogin ? (
      <div className='welcome'>Welcome</div>
    ) : (
      <div className='main'>
        <div className='form'>
          <div className='title-container'>
            <div className='title'>LOGIN</div>
          </div>
          <input
            type='text'
            className='username'
            placeholder='Username ...'
            id='username'
            value={value}
            onChange={onChange}
            onKeyPress={handleEnter}
          />
          <button className='button' onClick={handleClick}>
            LOGIN
          </button>
        </div>
      </div>
    )
  ) : myCtx.isLogin ? (
    <div className='welcome'>Chào mừng</div>
  ) : (
    <div className='main'>
      <div className='form'>
        <div className='title-container'>
          <div className='title'>ĐĂNG NHẬP</div>
        </div>
        <input
          type='text'
          className='username'
          placeholder='Tên người dùng ...'
          id='username'
          value={value}
          onChange={onChange}
          onKeyPress={handleEnter}
        />
        <button className='button' onClick={handleClick}>
          ĐĂNG NHẬP
        </button>
      </div>
    </div>
  );
}
