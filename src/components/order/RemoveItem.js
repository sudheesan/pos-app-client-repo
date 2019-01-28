import React, { Component } from 'react';
import { Button} from 'reactstrap'


class RemoveItem extends Component {

    constructor(props){
        super(props);
        this.removeItem = this.removeItem.bind(this);

    }

    removeItem (){
        this.props.removeItem(this.props.item);
    }
    render() {
      
            return (
               
                     <Button onClick={this.removeItem} color="primary">Remove Item</Button>
               );
    
    }

}
export default RemoveItem;