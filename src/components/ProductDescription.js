import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require("openai");


class ProductDescription extends Component {
    constructor(){
        super()
        this.state = {
            heading: 'The response from the AI will be shown here',
            response:'...await the response'
    }
}
    onFormSubmit = async e => {
        e.preventDefault()
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log('Object: ', formDataObj.productName)
                
        
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
            prompt: `Write a detailed, smart informative and professional product description for: ${formDataObj.productName}`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((response)=>{
            console.log(response)
        this.setState({
            heading: `AI Product Description Suggestions for: ${formDataObj.productName}`,
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
                    <h1>Generate Product Descriptions 🛍️</h1>
                    <br/>
                    <h4>To all content sellers, having trouble advertising products? Simply enter your name & product description and recieve a complete advertisement!</h4>
                <br/>
                <br/>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group className='"mb-3' controlId='formBasicEmail'>
                        <Form.Label>What product would you like to get a description for?</Form.Label>
                        <Form.Control
                            type='text'
                            name='productName'
                            placeholder='Enter product name with brief description'/>
                        <Form.Text className='text-muted'>
                            Enter as much information as possible for more accurate descriptions.
                        </Form.Text>    
                    </Form.Group>
                    <Button variant='primary' size='lg' type='submit'>
                    🎉 Get AI Suggestions
                    </Button>
                </Form>
                <br/>
                <br/>
                <Card>
                    <Card.Body>
                        <Card.Title><h1>{this.state.heading}</h1></Card.Title>
                        <hr/>
                        <br/>
                        <Card.Text><h4>{this.state.response}</h4></Card.Text>
                    </Card.Body>
                </Card>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}
export default ProductDescription
