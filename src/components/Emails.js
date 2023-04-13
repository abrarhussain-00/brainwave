import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require("openai");


class Emails extends Component {
    constructor(){
        super()
        this.state = {
            heading: 'The response from the AI will be shown here',
            response:'...await the response'
    }
}
componentDidMount() {
    const text = 'Here is your AI-generated response!';
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
    onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.Emails)

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
    prompt: `Write a detailed, smart email explaining: ${formDataObj.Emails}`,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
})
.then((response)=>{
    console.log(response)
this.setState({
    heading: `AI Email Generator: ${formDataObj.Emails}`,
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
                    <h1>Generate Email ✍️</h1>
                    <br/>
                    <h4>Need help generating emails but struggling on how to word it? Enter email topic and a brief description and have your custom email built out for you! </h4>
                <br/>
                <br/>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group className='"mb-3' controlId='formBasicEmail'>
                        <Form.Label>What is the topic for your email? What would you like to include in it?</Form.Label>
                        <Form.Control
                            type='text'
                            name='Emails'
                            placeholder='Enter email description'/>
                        <Form.Text className='text-muted'>
                            Enter as much information as possible for more accurate descriptions.
                        </Form.Text>    
                    </Form.Group>
                    <Button variant='primary' size='lg' type='submit'>
                    🎉 Get AI Suggestion
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
export default Emails