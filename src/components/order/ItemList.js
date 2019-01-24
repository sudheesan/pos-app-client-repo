import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormGroup,Input } from 'reactstrap';
import '../../styles/main.css'
import { fetchAllItems } from '../../actions/getItemAction'


class ItemList extends Component {

    constructor(props) {
        super(props);
        this.selectItem = this.selectItem.bind(this);
    }

    selectItem(event) {
        this.props.setSelectedItem(event.target.value);
    }

    componentDidMount() {
     
        this.props.dispatch(fetchAllItems());

    }


    render() {

        const items = this.props.itemList;
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

const mapStateToProps = state => ({
    itemList: state.itemReducer
});

export default connect(mapStateToProps) (ItemList);