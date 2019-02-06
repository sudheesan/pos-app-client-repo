import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col,Badge } from 'reactstrap';
import ChangeOrder from './ChangeOrder';
import { setCurrentOrderSuccess } from '../../actions/orderAction';
import '../../styles/main.css';
import { FaPlusCircle } from 'react-icons/fa';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';


class NewOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.props.dispatch(setCurrentOrderSuccess({}));
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <div className='new-order-launch'>
                <Row >
                    <Col>
                         <FaPlusCircle size='50' color='green' className="float-right" onClick={this.toggle}/>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size='lg' centered={true}>
                    <ModalHeader toggle={this.toggle}>Order <Badge color="secondary">New</Badge></ModalHeader>
                    <ModalBody>
                    <BlockUi blocking={this.props.isAddingOrder}>
                        <ChangeOrder/>
                    </BlockUi>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Back</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAddingOrder: state.orderReducer.isOrderAdding
});

export default connect(mapStateToProps)(NewOrder);