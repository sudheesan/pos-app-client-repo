import React, { Component } from 'react';
import {FormGroup,Input } from 'reactstrap';
import '../../styles/main.css'

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.selectItem = this.selectItem.bind(this);
    }

    selectItem(event) {
        this.props.setSelectedItem(event.target.value);
    }

    render() {

        const items = this.props.items;
        const itemArray = [];
        itemArray.push(<option key="epmty">{}</option>)
        items.forEach(item => {
            itemArray.push(<option key={item.itemCode} value={item.itemCode}>{item.itemName}</option>)
        });
        return (
            <FormGroup>
                <Input type="select" onChange={this.selectItem}>
                  {itemArray}
                </Input>
            </FormGroup>
        );
    }
}

export default ItemList;