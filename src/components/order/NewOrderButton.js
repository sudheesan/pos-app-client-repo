import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import '../../styles/main.css';


class NewOrderButton extends Component {

    constructor(props){
        super(props);
        this.addNewOrder = this.addNewOrder.bind(this);

    }

    addNewOrder (){
        this.props.newOrder();
    }
    render() {
        const order = this.props.order;
        if (order._id) {
            return null;
        } else {
            return (
                <Row>
                    <Col className='add-order-buton'>
                    <Button outline onClick={this.addNewOrder} color="success" size="lg" >Add Order</Button>
                    </Col>
                </Row>);
        }

    }

}
export default NewOrderButton;