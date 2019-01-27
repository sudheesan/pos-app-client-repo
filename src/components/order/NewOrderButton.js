import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap'


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
                    <Col md={{size:4 , offset:4}}>
                        <Button onClick={this.addNewOrder} color="primary" >Add Order</Button>
                    </Col>
                </Row>);
        }

    }

}
export default NewOrderButton;