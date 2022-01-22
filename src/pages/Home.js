import React, { useState } from 'react';
import { Row, Container, Navbar, Nav, Col, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Home.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import { Link } from 'react-router-dom';
import { logDOM } from '@testing-library/react';
var Img = <img src={'../public/logo1080.png'}/>

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: [0,1,2,3,4,5,6,7,8,9,10], 
    datasets: [
      {
        label: "Assets",
        data: [33, 53, 85,  53, 85, 41, 424,33, 33, 825, 535, 411],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      
    ]
  };
  
const Home = (props) => {

    return (
        <div>
           
            <Row className='main-row-home'>
                <Col md={10}>

                    <Navbar bg="" expand="lg">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    style={{ justifyContent: "space-around" }}
                                    navbarScroll
                                >
                                    <img className='logo' src='./logo.png' width={120}/>
                                    <Nav.Link  className='nav-li' id='Home' >
                                       <Link to="/">
                                        Home
                                       </Link>
                                        </Nav.Link>
                                    <Nav.Link  className='nav-li'>
                                    <Link to="/pools">
                                        Pools
                                       </Link>
                                    </Nav.Link>
                                    <Nav.Link  className='nav-li'>
                                        <Link to="/">
                                        Deposit/Withdraw
                                       </Link>
                                        </Nav.Link>
                                    <Nav.Link  className='nav-li search-li'>
                                        <Link to="/">
                                        Search
                                       </Link>

                                        </Nav.Link>

                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    
                    <Row>
                        <Col lg={9}>

                    <Row className='justify-content-between chart-data-row'>
                        <Col sm={9} >
                        <Container className='portfolio-text'>
                        <h1>Portfolio</h1>
                        <h2>$ 1090.00 <span> + 8%</span> Today</h2>
                    </Container>                            
                            <Container className='line-chart'>

                        <Line data={data} />
                            </Container>
                        </Col>
                        <Col sm={3} className='chart-coins' style={{textAlign:"center",}}>
                            <p className='coin-chart-text'>Bitcoin <span>$20</span></p>
                            <p className='coin-chart-text'>Tether <span>$10</span></p>
                            <p className='coin-chart-text'>Ethereum <span>$5</span></p>
                            <p className='coin-chart-text'>Doge <span>$30</span></p>
                            <p className='coin-chart-text'>Solana <span>$60</span></p>
                        </Col>
                      
                    </Row>
                                </Col>
                    <Col lg={3}>
                    <Container  className='wishlist-container' >
                    <Container className="wishlish-text">Wishlist</Container>
                    <Form.Group  className="check-box" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            label="MDA"
                        />
                    </Form.Group>
                    <Form.Group  className="check-box" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            label="ONG"
                        />
                    </Form.Group>
                    <Form.Group  className="check-box" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            label="AGIX"
                        />
                    </Form.Group>
                    <Form.Group  className="check-box" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            label="SUSD"
                        />
                    </Form.Group>
                    <Form.Group  className="check-box" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            label="WBTC"
                        />
                    </Form.Group>
                    <Form.Group  className="check-box" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            label="HEGIC"
                        />
                    </Form.Group>
                    <Form.Group  className="check-box" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            label="ADA"
                        />
                    </Form.Group>
                    <Form.Group  className="check-box" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            label="SOL"
                        />
                    </Form.Group>
                    <Form.Group  className="check-box" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            label="XRP"
                        />
                    </Form.Group>
                    <Form.Group  className="check-box" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" 
                            label="LUNA"
                        />
                    </Form.Group>
                </Container>
                    </Col>
                    </Row>
                </Col>
               
            </Row>
        </div>
    );
}

export default Home;