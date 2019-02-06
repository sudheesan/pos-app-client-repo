
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { setIsLoginSuccess } from '../../actions/loginAction';
import cookies from '../../utils/cookie.util';
import '../../styles/main.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      isOpen: false,

    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout() {
    cookies.deleteAllCookies();
    this.props.history.push('/');
    this.props.dispatch(setIsLoginSuccess(true));
  }

  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/"><span style={{ color: 'white' }}>POSINT OF SALE System</span></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret  className='text-white'> 
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.logout}>

                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect()(NavBar);