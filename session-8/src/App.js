import { useState, useEffect } from 'react';
import './App.css';

import LoremIpsum from './LoremIpsum.jsx';
import Button from './Button.jsx';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFirstHw, setIsFirstHw] = useState(true);
  const [value, setValue] = useState('')
  const [numberOfWords, setNumberOfWords] = useState(0);
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      let currentScroll = window.scrollY;
      if (currentScroll < lastScroll && currentScroll !== 0) {
        setIsVisible(!isVisible);
      } else {
        setIsVisible(false);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function handleClick() {
    setIsFirstHw(!isFirstHw);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => setNumberOfWords(value.length),500)
    return () => clearTimeout(timeoutId)
  },[value])

  return (
    <>
      <Button value='Bài 2' onClick={handleClick} />
      {isFirstHw ? (
        <LoremIpsum>
          {isVisible ? (
            <img
              src='circle-up-solid.svg'
              alt='circle up'
              className='circle-up'
              onClick={scrollToTop}
            />
          ) : null}
        </LoremIpsum>
      ) : (
        <div className='container'>
          <input
            type='text'
            className='input'
            placeholder='Enter text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <p>Word(s): {numberOfWords}</p>
        </div>
      )}
    </>
  );
}

export default App;
