import React from 'react';
import { Icon, Message } from 'semantic-ui-react';
import { Outlet } from 'react-router-dom';

function ProductItem() {
  return (
    <>
      <Message icon>
        <Icon name='circle notched' loading />
        <Message.Content>
          <Message.Header>Just one second</Message.Header>
          We are fetching that content for you.
        </Message.Content>
      </Message>
      <Outlet/>
    </>
  );
}

export default ProductItem;
