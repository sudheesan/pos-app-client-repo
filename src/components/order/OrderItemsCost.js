import React , {Component} from 'react';
import { Row , Col } from 'reactstrap';
import '../../styles/main.css'

class OrderItemsCost extends Component{


    render(){
        

        return(
            <Row className="Amount_row">
                <Col md={{size:6 , offset:3}}>
                     <h1>Total Cost : {this.props.order.totalAmount}</h1>
                </Col>
            </Row>
        );
    }

}

export default OrderItemsCost;