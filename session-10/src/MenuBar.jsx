import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';
import MyContext from './MyContext' 

function MenuBar() {
  const [currentItem, setCurrentItem] = useState('home');
  const navigate = useNavigate();
  const myCtx = useContext(MyContext);

  const handleLogOut = () => {
    myCtx.setStayLogin(false)
    myCtx.setIsLogin(false)
    localStorage.setItem('stayLogin', false)
  }
  return (
    <Menu fluid pointing>
      <Link to='/products'>
        <Menu.Item
          name='products'
          active={currentItem === 'products'}
          onClick={(e, { name }) => setCurrentItem(name)}
        />
      </Link>
      <Link to='/invoices'>
        <Menu.Item
          name='Invoices'
          active={currentItem === 'Invoices'}
          onClick={(e, { name }) => setCurrentItem(name)}
        />
      </Link>
      <Link to='/cart'>
        <Menu.Item
          name='Cart'
          active={currentItem === 'Cart'}
          onClick={(e, { name }) => setCurrentItem(name)}
        />
      </Link>
      <Link to='/profile'>
        <Menu.Item
          name='Profile'
          active={currentItem === 'Profile'}
          onClick={(e, { name }) => setCurrentItem(name)}
        />
      </Link>
      <Link to='/about'>
        <Menu.Item
          name='About'
          active={currentItem === 'About'}
          onClick={(e, { name }) => setCurrentItem(name)}
        />
      </Link>
      <Menu.Item>
        <Button onClick={handleLogOut}>Log out</Button>
      </Menu.Item>
    </Menu>
  );
}

export default MenuBar;
