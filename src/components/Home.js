import React, { useState, useEffect } from 'react';
import Display from './Display';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineLoading } from 'react-icons/ai';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';



const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading process
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const renderLoadingScreen = () => {
        return (
            <div className="loading-screen" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <AiOutlineLoading className="loading-icon" />
                <h1 className="loading-text">Right at your service...</h1>
            </div>
        );
    };



    const renderMainContent = () => {
        return (
            <div className="main-content" style={{ backgroundImage: 'backimage.jpeg' }}>
                <h2 className="main-heading">
                    <br />
                    Choose of the following to start generating AI content
                </h2>
                <Row className="mt-5">
                    <Col md={6} sm={12}>
                        <div className="box email-generator">
                            <Display
                                header="✍️ Email Generator"
                                title="Generate Email"
                                text="Need help generating emails but struggling on how to word it? Enter email topic and a brief description and have your custom email built out for you!"
                                theLink="/cold-emails"
                            />
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="box product-description">
                            <Display
                                header="🛍️ Product Descriptions"
                                title="Generate Product Descriptions"
                                text="To all content sellers, having trouble advertising products? Simply enter your name & product description and recieve a complete advertisement!"
                                theLink="/product-description"
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={6} sm={12}>
                        <div className="box tweets">
                            <Display
                                header="💬 Tweets"
                                title="Generate Tweets"
                                text="Need help coming up with a fun tweet to share with your followers? Now use the new tweets feature to write out tweets for you!"
                                theLink="/tweets"
                            />
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="box seo">
                            <Display
                                header="🔍 SEO"
                                title="SEO"
                                text="Want to make your videos more discoverable? Use the new SEO feature to generate the right keywords for your videos to target the right audience."
                                theLink="/seo"
                            />
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <div>
                    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                            <div className='me-5 d-none d-lg-block'>
                                <span>Get connected with us on social networks:</span>
                            </div>

                            <div>
                                <a href='' className='me-4 text-reset'>
                                    <MDBIcon fab icon="facebook-f" />
                                </a>
                                <a href='' className='me-4 text-reset'>
                                    <MDBIcon fab icon="twitter" />
                                </a>
                                <a href='' className='me-4 text-reset'>
                                    <MDBIcon fab icon="google" />
                                </a>
                                <a href='' className='me-4 text-reset'>
                                    <MDBIcon fab icon="instagram" />
                                </a>
                                <a href='' className='me-4 text-reset'>
                                    <MDBIcon fab icon="linkedin" />
                                </a>
                                <a href='' className='me-4 text-reset'>
                                    <MDBIcon fab icon="github" />
                                </a>
                            </div>
                        </section>

                        <section className=''>
                            <MDBContainer fluid className='text-center text-md-start mt-5'>
                                <MDBRow className='mt-3'>
                                    {/* <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Brainwave
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol> */}

                                    <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>Meet the Developer</h6>
                                        <p>
                                            <a href="https://www.abrarbiz.net/" className='text-reset'>
                                                Portfolio Page
                                            </a>
                                        </p>
                                        <p>
                                            <a href='https://github.com/sahussain887' className='text-reset'>
                                                GitHub
                                            </a>
                                        </p>
                                        <p>
                                            <a href='http://www.linkedin.com/in/abrar-hussain00' className='text-reset'>
                                                LinkedIn
                                            </a>
                                        </p>
                                        {/* <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p> */}
                                    </MDBCol>

                                    {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                    <a href='#!' className='text-reset'>
                        Pricing
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                        Settings
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                        Orders
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                        Help
                    </a>
                </p>
            </MDBCol> */}

                                    <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                        <p>
                                            <MDBIcon icon="home" className="me-2" />
                                            Chicago, IL US
                                        </p>
                                        <p>
                                            <MDBIcon icon="envelope" className="me-3" />
                                            sahussain887@gmail.com
                                        </p>
                                        <p>
                                            <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                        </p>
                                        <p>
                                            <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </section>

                        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                            © 2023 Copyright:
                            <a className='text-reset fw-bold' href='https://abrarbiz.net/'>
                                abrarbiz.net
                            </a>
                        </div>
                    </MDBFooter>
                </div>
            </div>
        );
    };

    return (
        <div className="home-container">
            <Container>
                {isLoading ? renderLoadingScreen() : renderMainContent()}
            </Container>
        </div>
    );
};

export default Home;
