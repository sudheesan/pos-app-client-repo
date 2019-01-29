import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Container, Row } from 'reactstrap'
import NewOrderItem from './NewOrderItem';
import OrderItemsCost from './OrderItemsCost';
import ChangeItemQuantity from './ChangeItemQuantity';
import NewOrderButton from './NewOrderButton';
import RemoveItem from './RemoveItem';
import { updateOrder, addNewOrder, setCurrentOrderSuccess } from '../../actions/orderAction';
import '../../styles/main.css';

class ChangeOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: this.props.currentOrder
        }
        this.addNewItemToOrder = this.addNewItemToOrder.bind(this);
        this.updateTotalCostForItem = this.updateTotalCostForItem.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.newOrder = this.newOrder.bind(this);
        this.updateState = this.updateState.bind(this);
        this.removeItem = this.removeItem.bind(this);
    };

    componentWillUnmount() {
        if (this.state.order._id) {
            this.props.dispatch(updateOrder(this.state.order));
        }
    }

    removeItem(itemToRemove) {
        let currentOrder = this.state.order;
        currentOrder.orderItems.forEach((orderToChange, index) => {
            if (orderToChange.item.itemCode === itemToRemove.item.itemCode) {
                currentOrder.orderItems.splice(index, 1);
            }
        });
        currentOrder.totalAmount = this.getTotalCostForitems(currentOrder);
        this.updateState(currentOrder);


    }

    async newOrder() {
        await this.props.dispatch(addNewOrder(this.state.order))
        this.setState({
            order: this.props.currentOrder
        });
    }

    getTotalCostForitems(order) {
        let totalCost = 0;
        order.orderItems.forEach(orderItem => {
            totalCost += (orderItem.item.unitPrice * orderItem.itemQuantity);
        });
        return totalCost;
    }

    async updateState(order) {
        await this.props.dispatch(setCurrentOrderSuccess(order));
        this.setState({
            order: this.props.currentOrder,
        });
    }


    changeQuantity(newItem) {
        let newOrder = this.state.order;
        this.state.order.orderItems.forEach((orderItem, index) => {
            if (orderItem.item.itemCode === newItem.item.itemCode) {
                newOrder.orderItems[index] = newItem;
                newOrder.totalAmount = this.getTotalCostForitems(newOrder);
                this.updateState(newOrder);
            }
        })
    }

    addNewItemToOrder(newItem) {
        let newOrder = this.state.order.orderItems ? this.state.order : {};
        if (!newOrder.orderItems) {
            newOrder.orderItems = [];
            newOrder.orderItems.push(newItem)
        }
        else {
            newOrder = this.upDateOrderWithNewItem(newOrder, newItem);
        }
        newOrder.totalAmount = this.getTotalCostForitems(newOrder);
        this.updateState(newOrder);

    }

    upDateOrderWithNewItem(order, newItem) {
        let currentOrder = order;
        let itemExist = false;
        let itemIndex = -1;
        currentOrder.orderItems.forEach((currentItem, index) => {
            console.log("The currentOrder", currentItem.item)
            if (currentItem.item.itemCode === newItem.item.itemCode) {
                itemExist = true;
                itemIndex = index;
            }
        });
        if (itemExist) {
            currentOrder.orderItems[itemIndex].itemQuantity += newItem.itemQuantity;
        }
        else {
            currentOrder.orderItems.push(newItem);
        }
        return currentOrder;
    }


    updateTotalCostForItem(totalCostForItems) {
        let newOrder = this.state.order;
        newOrder.totalCost = totalCostForItems;
        this.updateState(newOrder);
    }

    render() {
        let itemRows = []
        if (this.state.order.orderItems) {
            const items = this.state.order.orderItems;
            itemRows = items.map((newItem) =>
                <tr key={newItem.item.itemCode}>
                    <td>{newItem.item.itemName}</td>
                    <td>{newItem.item.unitPrice}</td>
                    <td>{newItem.itemQuantity}</td>
                    <td className="text-center"><ChangeItemQuantity changeType="+" item={newItem} changeQuantity={this.changeQuantity} /></td>
                    <td className="text-center"><ChangeItemQuantity changeType="-" item={newItem} changeQuantity={this.changeQuantity} /></td>
                    <td className="text-center"><RemoveItem item={newItem} removeItem={this.removeItem} /></td>
                </tr>
            );
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
                                    <td className="text-center">Reduce</td>
                                    <td className="text-center"></td>
                                </tr>
                            </thead>
                            <tbody>
                                {itemRows}
                            </tbody>
                        </Table>
                    </Row>
                    <NewOrderItem addNewItemToOrder={this.addNewItemToOrder} />
                    <OrderItemsCost order={this.state.order} />
                    <NewOrderButton newOrder={this.newOrder} order={this.state.order}></NewOrderButton>
                </Container>
            </div>

        );

    }


}
const mapStateToProps = state => ({
    currentOrder: state.orderReducer.currentOrder
});

export default connect(mapStateToProps)(ChangeOrder);