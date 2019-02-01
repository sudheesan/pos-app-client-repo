import React, { Component } from 'react';
import { FaMinus } from 'react-icons/fa';


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
                    <div>
                        <FaMinus cursor='pointer' size="40" onClick={this.removeItem} color="red"/>
                    </div>
                     
               );
    
    }

}
export default RemoveItem;