import './App.css';
import { useState } from 'react';
import MyContext from './MyContext';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Header from './Components/Header';

function App() {
  const [language, setLanguage] = useState('Tiếng Việt');
  const [isLogin, setIsLogin] = useState(false);
  const [input, setInput] = useState('');

  return (
    <MyContext.Provider
      value={{
        language: language,
        setLanguage: setLanguage,
        isLogin: isLogin,
        setIsLogin: setIsLogin,
      }}>
      <Header username={input} />
      <Main value={input} onChange={(e) => setInput(e.target.value)} onClick />
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
