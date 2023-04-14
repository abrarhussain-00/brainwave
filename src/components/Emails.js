import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const { Configuration, OpenAIApi } = require("openai");


class ProductDescription extends Component {
    componentDidMount() {
        const text = 'Here is your AI-generated response:';
        let i = 0;
        const typeEffect = setInterval(() => {
            if (i < text.length) {
                this.setState({
                    response: text.slice(0, i + 1),
                });
                i++;
            } else {
                clearInterval(typeEffect);
            }
        }, 100);
    }
    constructor(){
        super()
        this.state = {
            heading: 'You searched for: ',
            response: 'Please wait...'
        }
}
    onFormSubmit = async e => {
        e.preventDefault()
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log('Object: ', formDataObj.email)
                
        
        // prompt: `Write a detailed, smart informative and professional product description for: ${formDataObj.productName}`,

        
        //OPENAI
        const configuration = new Configuration({
            // apiKey: process.env.OPENAI_API_KEY,
            apiKey: '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'
        });
        console.log('KEY: ', configuration )
        const openai = new OpenAIApi(configuration);
        
        // prompt: `Write a detailed, smart informative and professional product description for: ${formDataObj.productName}`,
        
        openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write a smart detailed email about: ${formDataObj.email}`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((response)=>{
            console.log(response)
        this.setState({
            heading: `AI Email Generator: ${formDataObj.email}`,
            response: `Here is the response: ${response.data.choices[0].text}`
        })
    })
    .catch((error)=>{
        console.log("error: ",error)  
    })
}
    
    render() {
        return(
            <div>
                <Container>
                    <br/>
                    <br/>
                    <h1>Generate Email ✍</h1>
                    <br/>
                    <h4>Need help generating emails but struggling on how to word it? Enter email topic and a brief description and have your custom email built out for you!</h4>
                <br/>
                <br/>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group className='"mb-3' controlId='formBasicEmail'>
                        <Form.Label>What would you like to email about?</Form.Label>
                        <Form.Control
                            type='text'
                            name='email'
                            placeholder='Enter email'/>
                        <Form.Text className='text-muted'>
                            Enter as much information as possible for more accurate descriptions.
                        </Form.Text>    
                    </Form.Group>
                    <Button variant='dark' size='sm' type='submit'>
                    🎉 Get AI Suggestions
                    </Button>
                </Form>
                <br/>
                <br/>
                <Card>
                    <Card.Body>
                        <Card.Title><h3>{this.state.heading}</h3></Card.Title>
                        <hr/>
                        <br/>
                        <Card.Text><h6>{this.state.response}</h6></Card.Text>
                    </Card.Body>
                </Card>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
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
        )
    }
}
export default ProductDescription
