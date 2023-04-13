import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require("openai");

class Tweets extends Component {
    constructor(){
        super()
        this.state = {
            heading: 'The response from the AI will be shown here',
            response:'...await the response'
    }
}
    onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.Tweets)

        //OPENAI
        const configuration = new Configuration({
            apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);
        
        openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Generate a tweet i can use to get to advertise on twitter to get more views for : ${formDataObj.Tweets}`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((response)=>{
            console.log(response)
        this.setState({
            heading: `AI Tweet Suggestion for: ${formDataObj.Tweets}`,
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
                    <h1>Generate Tweets 💬</h1>
                    <br/>
                    <h4>Need help coming up with a fun tweet to share with your followers? Now use the new tweets feature to write out tweets for you!</h4>
                <br/>
                <br/>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group className='"mb-3' controlId='formBasicEmail'>
                        <Form.Label>What would you like to tweet about?</Form.Label>
                        <Form.Control
                            type='text'
                            name='tweets'
                            placeholder='Enter tweet idea'/>
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
export default Tweets