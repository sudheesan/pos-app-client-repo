import React , {Component} from 'react';
import { Row , Col } from 'reactstrap';
import '../../styles/main.css'

class OrderItemsCost extends Component{


    render(){
        const order = this.props.order;
        if(order.orderItems){
            return(
                <Row className="Amount_row">
                    <Col md={{size:6 , offset:3}}>
                         <h1>Total Cost : {order.totalAmount}</h1>
                    </Col>
                </Row>
            );
        }else{
            return null;
        }
        
    }

}

export default OrderItemsCost;