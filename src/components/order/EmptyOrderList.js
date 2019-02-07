import React from 'react';
import { Jumbotron } from 'reactstrap';

const EmptyOrderList = (props) => {
  return (
    <div>
      <Jumbotron><h1>Welcome to, POINT OF SALE System!</h1>
        <p className="lead">There aren't any current pending orders to show</p>
        <hr className="my-2" />
        <p>Click New Order button to add a fresh oder</p>
      </Jumbotron>
    </div>
  );
};

export default EmptyOrderList;