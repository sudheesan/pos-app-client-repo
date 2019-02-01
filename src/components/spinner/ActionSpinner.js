import React, { Component } from 'react';
import { Spinner} from 'reactstrap'

class ActionSpinner extends Component {
    render() {
        return (
            
            <div className="text-center">
              
                    <Spinner color={this.props.color}  style={{ width: this.props.width, height: this.props.height }} />
               
            </div>

        );
    }

}

export default ActionSpinner;