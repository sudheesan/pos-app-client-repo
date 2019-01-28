import React ,{Component} from 'react';
import { Button } from 'reactstrap';


class ChangeItemQuantity extends Component{


    constructor(props){
        super(props);
        this.changeQuantity = this.changeQuantity.bind(this);
    }

    changeQuantity(){
        let item = this.props.item;
        const changeType = this.props.changeType;
        if(changeType === '+'){
            item.itemQuantity = item.itemQuantity+1;
        }else{
            item.itemQuantity = item.itemQuantity-1;
        }
        this.props.changeQuantity(item);
    }

    render(){
        const changeType= this.props.changeType;
        return (
           
            <Button color="primary" onClick={this.changeQuantity}>{changeType}</Button>
           
        );
    }

}
export default ChangeItemQuantity;