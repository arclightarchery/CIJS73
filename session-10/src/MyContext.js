import { createContext } from 'react';

const defaultValue = { isLogin: false };
const MyContext = createContext(defaultValue);

export default MyContext;
