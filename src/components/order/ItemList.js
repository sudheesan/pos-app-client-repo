import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, Input } from 'reactstrap';
import '../../styles/main.css'
import { fetchAllItems } from '../../actions/getItemAction'


class ItemList extends Component {

    constructor(props) {
        super(props);
        this.selectItem = this.selectItem.bind(this);
    }

    selectItem(event) {
        console.log(event.target.value)
        this.props.setSelectedItem(event.target.value);
    }

     componentDidMount() {
       this.init();
    }

    async init(){
       await this.props.dispatch(fetchAllItems());
        this.props.setSelectedItem(this.props.itemList[0].itemCode);

    }


    render() {
        const items = this.props.itemList;
        let itemRows = items.map((item) =>
            <option key={item.itemCode} value={item.itemCode}>{item.itemName}</option>
        );
        return (
            <FormGroup>
                <Input type="select" onChange={this.selectItem}>
                    {itemRows}
                </Input>
            </FormGroup>
        );
    }
}

const mapStateToProps = state => ({
    itemList: state.itemReducer
});

export default connect(mapStateToProps)(ItemList);