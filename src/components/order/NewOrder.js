import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Row,Col} from 'reactstrap';
import ChangeOrder from './ChangeOrder'

class NewOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: {},
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
            <div >
                <Row>
                    <Col md={{ size: 3, order: 2, offset: 9 }}>
                        <Button  onClick={this.toggle} color="primary" >New Order</Button>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size='lg' centered={true}>
                    <ModalHeader toggle={this.toggle}>New Order</ModalHeader>
                    <ModalBody>
                        <ChangeOrder items={this.props.items} order={order} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Back</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default NewOrder;