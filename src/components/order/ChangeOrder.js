import React, { Component } from 'react';
import { Table ,Container, Row} from 'reactstrap'
import NewOrderItem from './NewOrderItem';
import OrderItemsCost from './OrderItemsCost';
import ChangeItemQuantity from './ChangeItemQuantity';
import '../../styles/main.css'
class ChangeOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: this.props.order
        }
        this.addNewItemToOrder = this.addNewItemToOrder.bind(this);
        this.updateTotalCostForItem = this.updateTotalCostForItem.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);

    };

    getTotalCostForitems(order) {
        let totalCost = 0;
        order.orderItems.forEach(orderItem => {
            totalCost += (orderItem.item.unitPrice * orderItem.itemQuantity);
        });
        return totalCost;
    }



    changeQuantity(newItem) {
    
        let newOrder = this.state.order;

        this.state.order.orderItems.forEach((orderItem, index) => {
            if (orderItem.item.itemCode === newItem.item.itemCode) {
                newOrder.orderItems[index] = newItem;
                newOrder.totalAmount = this.getTotalCostForitems(newOrder);
                this.setState({
                    order: newOrder
                });
            }
        })
    }

    addNewItemToOrder(newItem) {
        let newOrder = this.state.order.orderItems ? this.state.order :{} ;
        if(!newOrder.orderItems){
            newOrder.orderItems=[];
            newOrder.status = "pending";
            newOrder.orderItems.push(newItem)
        }
        else{
            newOrder = this.upDateOrderWithNewItem(newOrder,newItem);
        }
        newOrder.totalAmount = this.getTotalCostForitems(newOrder);
        console.log("current order",newOrder);
        this.setState({
            order: newOrder
        });
    }

    upDateOrderWithNewItem(order,newItem){
        let currentOrder = order;
        let itemExist =false;
        let itemIndex = -1;
        currentOrder.orderItems.forEach((currentItem,index)=>{
            console.log("The currentOrder",currentItem.item)
            if(currentItem.item.itemCode === newItem.item.itemCode){
                itemExist = true;
                itemIndex = index;
            }
        });
        if(itemExist){
            currentOrder.orderItems[itemIndex].itemQuantity+=newItem.itemQuantity;
        }
        else{
            currentOrder.orderItems.push(newItem);
        }
        return currentOrder;
    }


    updateTotalCostForItem(totalCostForItems) {
        let newOrder = this.state.order;
        newOrder.totalCost = totalCostForItems;
        this.setState({
            order: newOrder
        });
    }

    render() {

       
        const itemRows = []
        if(this.state.order.orderItems){
            const items = this.state.order.orderItems;
            items.forEach(newItem => {
                itemRows.push(
                    <tr key={newItem.item.itemCode}>
                        <td>{newItem.item.itemName}</td>
                        <td>{newItem.item.unitPrice}</td>
                        <td>{newItem.itemQuantity}</td>
                        <td className="text-center"><ChangeItemQuantity changeType="+" item={newItem} changeQuantity={this.changeQuantity} /></td>
                        <td className="text-center"><ChangeItemQuantity changeType="-" item={newItem} changeQuantity={this.changeQuantity} /></td>
                    </tr>
                );
            });
        }
       
        return (
            <div>
                <Container>
                    <Row>
                        <Table bordered >
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>unit-price</td>
                                    <td>Quantity</td>
                                    <td className="text-center">Add</td>
                                    <td className="text-center">Remove</td>
                                </tr>
                            </thead>
                            <tbody>
                                {itemRows}
                            </tbody>
                        </Table>
                    </Row>
                    <NewOrderItem  addNewItemToOrder={this.addNewItemToOrder} />
                    <OrderItemsCost order={this.state.order} updateTotalCostForItem={this.updateTotalCostForItem} />
                </Container>
            </div>

        );

    }


}

export default ChangeOrder;