import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Products() {
  const navigate = useNavigate();

  return (
    <>
      <Button.Group>
        <Button onClick={() => navigate('product1')}>One</Button>
        <Button onClick={() => navigate('product2')}>Two</Button>
        <Button onClick={() => navigate('product3')}>Three</Button>
      </Button.Group>
      <Outlet />
    </>
  );
}

export default Products;
