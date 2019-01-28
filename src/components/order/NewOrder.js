import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import ChangeOrder from './ChangeOrder';
import { setCurrentOrderSuccess } from '../../actions/orderAction';
import '../../styles/main.css';


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
        this.props.dispatch(setCurrentOrderSuccess(this.state.order));
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <div className='new-order-launch'>
                <Row >
                    <Col>
                         <Button className="float-right" onClick={this.toggle} color="primary" >New Order</Button>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size='lg' centered={true}>
                    <ModalHeader toggle={this.toggle}>New Order</ModalHeader>
                    <ModalBody>
                        <ChangeOrder items={this.props.items} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Back</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}



export default connect()(NewOrder);