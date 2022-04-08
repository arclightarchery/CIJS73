import { createContext } from 'react';

const defaultValue = { language: 'Tiếng Việt', isLogin: false };
const MyContext = createContext(defaultValue);

export default MyContext;
