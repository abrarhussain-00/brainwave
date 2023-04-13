import React, { useState, useEffect } from 'react';
import Display from './Display';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineLoading } from 'react-icons/ai';


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
            <div className="main-content">
                <h2 className="main-heading">
                    <br />
                    Start by picking any of the use cases below to start generating AI content
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
                                theLink="/tweets"
                            />
                        </div>
                    </Col>
                </Row>
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
