import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ChangeOrder from './ChangeOrder'

class OrderListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: this.props.order,
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        const order = this.state.order;
        
        return (

            <tr onClick={this.toggle}>
                <td>{order.orderNumber}</td>
                <td>Burger*2 + Pizza*2</td>
                <td>RS {order.totalAmount}.00</td>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size='lg' centered={true}>
                    <ModalHeader toggle={this.toggle}>Order - {order.orderNumber}</ModalHeader>
                    <ModalBody>
                        <ChangeOrder items={this.props.items} order={order} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Back</Button>
                    </ModalFooter>
                </Modal>
            </tr>

        );
    }
}

export default OrderListItem;