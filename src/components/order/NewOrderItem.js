import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Input } from 'reactstrap';
import ItemList from './ItemList';
import { FaPlus } from 'react-icons/fa';


class NewOrderItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
            productQuantity: null
        }
        this.setSelectedItem = this.setSelectedItem.bind(this);
        this.addNewItemToOrder = this.addNewItemToOrder.bind(this);
        this.handleProductQuantityTextChange = this.handleProductQuantityTextChange.bind(this);
    }

    addNewItemToOrder() {
        let currentItemQuantity = this.state.productQuantity;
        let itemToadd = this.getSelectedItem(this.state.selectedItem);
        if (currentItemQuantity > 0) {
            this.props.addNewItemToOrder({
                item: itemToadd,
                itemQuantity: parseInt(currentItemQuantity)
            });
        }

    }

    setSelectedItem(item) {

        this.setState({
            selectedItem: item
        });
    }

    getSelectedItem(itemCode) {
        var newItem = {}
        this.props.itemList.forEach(item => {
            if (item.itemCode === itemCode) {
                newItem = item;
            }
        });
        return newItem;
    }



    handleProductQuantityTextChange(e) {
        this.setState({
            productQuantity: e.target.value
        })
    }


    render() {
        return (
            <Row className="product-row">
                <Col md="3">
                    <div className='editable-order-item-lis-label'>
                        Select Item:
                    </div>
                </Col>
                <Col md="3"><ItemList setSelectedItem={this.setSelectedItem}></ItemList></Col>
                <Col md="3">
                    <Input type="number" placeholder="quantity..." onChange={this.handleProductQuantityTextChange} min="0"></Input>
                </Col>
                <Col md="3">
                    {!this.props.isLoading && <FaPlus color="green" size="30" cursor='pointer' onClick={this.addNewItemToOrder}/>}
                </Col>
            </Row>

        );

    }

}

const mapStateToProps = state => ({
    itemList: state.itemReducer.items,
    isLoading :state.itemReducer.isLoading
});

export default connect(mapStateToProps)(NewOrderItem);