
import React from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import Brand from "./Brand";

class HomeNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <div className="d-flex align-items-center">

                <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                  <Brand bold/>
                  {/* <img
                    alt="..."
                    src={require("../assets/images/brand/hrms-logo.png")}
                  /> */}
                </NavbarBrand>
                <button className="navbar-toggler" id="navbar_global">
                  <span className="navbar-toggler-icon" />
                </button>
                <UncontrolledCollapse
                  toggler="#navbar_global"
                  navbar
                  className={this.state.collapseClasses}
                  onExiting={this.onExiting}
                  onExited={this.onExited}
                >
                  <div className="navbar-collapse-header">
                    <Row>
                      <Col className="collapse-brand" xs="6">
                        <Link to="/">
                          Kariyerim.Net

                        </Link>
                      </Col>
                      <Col className="collapse-close" xs="6">
                        <button className="navbar-toggler" id="navbar_global">
                          <span />
                          <span />
                        </button>
                      </Col>
                    </Row>
                  </div>

                  <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                    <NavItem>
                      <Link to="#" className='nav-link'>
                        İş ilanları
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="#" className='nav-link'>

                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to="#" className='nav-link'>

                      </Link>
                    </NavItem>
                  </Nav>
                  <Nav className="align-items-lg-center ml-lg-auto" navbar>
                    <NavItem className="d-none d-lg-block ml-lg-4">
                      <Button color="success" to="/auth/jobseeker-register" tag={Link}>
                        <span className="btn-inner--text">
                          Üye Ol
                        </span>
                      </Button>{" "}
                      <Button color="warning" to="/auth/login" tag={Link}>
                        <span className="btn-inner--text">
                          Giriş Yap
                        </span>
                      </Button>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </div>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default HomeNavbar;
