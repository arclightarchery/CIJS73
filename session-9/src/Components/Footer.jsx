import { useContext } from 'react';
import MyContext from '../MyContext';

export default function Footer() {
  const myCtx = useContext(MyContext);
  const handleChange = (e) => {
    myCtx.setLanguage(e.target.value);
  };

  return (
    <div className='footer'>
      <select name='language' id='language' onChange={handleChange}>
        <option>Tiếng Việt</option>
        <option>English</option>
      </select>
    </div>
  );
}
