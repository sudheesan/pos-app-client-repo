import React, { Component } from 'react';
import { Row, Col, Input ,Button } from 'reactstrap'
import ItemList from './ItemList';

class NewOrderItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem:null,
            productQuantity: 0
        }
        this.setSelectedItem= this.setSelectedItem.bind(this);
        this.addNewItemToOrder = this.addNewItemToOrder.bind(this);
        this.handleProductQuantityTextChange = this.handleProductQuantityTextChange.bind(this);
    }

    addNewItemToOrder() {
        let currentItemQuantity = this.state.productQuantity;this.getSelectedItem(this.state.selectedItem)
        let itemToadd = this.getSelectedItem(this.state.selectedItem);
        if(currentItemQuantity >0){
            this.props.addNewItemToOrder({
                item : itemToadd,
                itemQuantity: currentItemQuantity
            });
        }
    
    }


    setSelectedItem(item){
     
        this.setState({
            selectedItem:item
        });
    }

    getSelectedItem(itemCode){
        var newItem = {}
        this.props.items.forEach(item => {
            if(item.itemCode === itemCode){
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

                <Col md="3"><ItemList  setSelectedItem={this.setSelectedItem} items={this.props.items}></ItemList></Col>
                <Col  md="3">                
                    <Input type="number" placeholder="quantity..." onChange={this.handleProductQuantityTextChange}></Input>
                </Col>
                <Col  md="2">                
                    <Button color="primary" onClick={this.addNewItemToOrder}>Add Item</Button>
                </Col>
            </Row>

        );

    }

}

export default NewOrderItem;