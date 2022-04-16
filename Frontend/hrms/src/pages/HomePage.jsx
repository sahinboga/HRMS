import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from "reactstrap";
import Brand from '../components/Brand';
export default function () {
    return (
        <div>
            <main>
                <div className="position-relative">
                    <section className="section section-hero section-shaped">
                        <div className="shape shape-style-1 shape-default">
                            <span className="span-150"></span>
                            <span className="span-50"></span>
                            <span className="span-50"></span>
                            <span className="span-75"></span>
                            <span className="span-100" style={{ animationDelay: 1 }}></span>
                            <span className="span-75"></span>
                            <span className="span-200" style={{ animationDelay: 1 }}></span>
                            <span className="span-50"></span>
                            <span className="span-100" style={{ animationDelay: 2 }}></span>
                            <span className="span-50"></span>
                            <span className="span-100"></span>
                        </div>
                        <Container className="shape-container d-flex align-items-center py-lg">
                            <div className="col px-0">
                                <div className="align-items-center justify-content-center">
                                    <Col className="text-left" lg="6">
                                        <Brand bold />
                                        <p className="lead text-white" style={{ fontWeight: 400 }}>
                                            Yeteneklerine uygun iş pozisyonları seni bekliyor. <br />
                                            Yeni bir deneyim için hazırsan üye ol. <br />
                                            Haydi! Kim olduğunu gösterme vakti geldi. <br />
                                            Sen sen değilsin, sen tam bir dehasın...
                                        </p>
                                        <div className="btn-wrapper mt-5">
                                            <Button color="primary" size="lg" to="/auth/employer-register" tag={Link}>
                                                <span className="btn-inner--text">
                                                    İşveren
                                                </span>
                                            </Button>{" "}
                                            <Button color="success" size="lg" to="/auth/jobseeker-register" tag={Link}>
                                                <span className="btn-inner--text">
                                                    Üye Ol
                                                </span>
                                            </Button>{" "}
                                            <Button color="warning" size="lg" to="/auth/login" tag={Link}>
                                                <span className="btn-inner--text">
                                                    Giriş Yap
                                                </span>
                                            </Button>
                                        </div>
                                        <div className="mt-5">
                                            <small className="text-white font-weight-bold mb-0 mr-2">

                                            </small>
                                            {/* <img
                                                alt="..."
                                                className="ml-1"
                                                style={{ height: "28px" }}
                                                src={require("assets/img/brand/creativetim-white-slim.png")}
                                            /> */}
                                        </div>
                                    </Col>
                                    <Col>
                                    </Col>
                                </div>
                            </div>
                        </Container>
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                                <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
                            </svg>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
