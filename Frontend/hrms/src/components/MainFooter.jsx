/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import Brand from "./Brand";

class MainFooter extends React.Component {
  render() {
    return (
      <>
         <footer>
            <div className="separator separator-skew zindex-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                    style={{transform: "scale(-1) translate(0px, 1px)"}}
                >
                    <polygon
                        className="fill-white"
                        points="2560 0 2560 100 0 100"
                    />
                </svg>
            </div>
            <div className='bg-dark'>
                <div className='pt-5'>
                    <section className="section pb-3 section-shaped">
                        <Container>
                            <div className='text-center'>
                                <Brand bold/>
                                <br />
                                <div className='mt-5 pt-5'>
                                    <Link to="#" className='text-white btn btn-link'>Anasayfa</Link>
                                    <Link to='#' className='text-white btn btn-link'>Blog</Link>
                                    <Link to='#' className='text-white btn btn-link'>Forum</Link>
                                    <Link to='#' className='text-white btn btn-link'>İLETİŞİM</Link>
                                </div>
                                <p className='text-warning font-weight-bold pt-5 mt-5'>
                                    &copy; 2022 Tüm Hakları Saklıdır.
                                    <Link to="/" className='text-white'>
                                        &nbsp;Kariyerim.Net
                                    </Link> 
                                </p>
                                <p>v0.0.2 - Not Open Source</p>
                                <p>Developer Mode & Last Update: 20.02.2022</p>
                            </div>
                        </Container>

                    </section>
                </div>
            </div>
        </footer>
      </>
    );
  }
}

export default MainFooter;
