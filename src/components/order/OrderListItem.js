import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Badge } from 'reactstrap';
import ChangeOrder from './ChangeOrder'
import {setCurrentOrderSuccess} from '../../actions/orderAction';
import '../../styles/main.css';


class OrderListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.props.dispatch(setCurrentOrderSuccess(this.props.order));
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const order = this.props.order;
        
        return (

            <tr onClick={this.toggle} >
                <td> <h3><Badge color="secondary">{order.orderNumber}</Badge></h3></td>
                <td className='text-center'> <h3><Badge color="warning">{order.orderStatus}</Badge></h3></td>
                <td className='text-center'> <h3><Badge color="info">RS {order.totalAmount}.00</Badge></h3></td>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size='lg' centered={true}>
                    <ModalHeader toggle={this.toggle}>Order - {order.orderNumber}</ModalHeader>
                    <ModalBody>
                        <ChangeOrder />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Back</Button>
                    </ModalFooter>
                </Modal>
            </tr>

        );
    }
}

export default connect()(OrderListItem);