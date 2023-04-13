import React from 'react'
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'

class Navigation extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar bg='light' variant='light' sticky='top' expand='md' collapseOnSelect>
                        <Navbar.Brand href='/'>
                            <img src='logooo.png' alt='logo for site' width='50px' style={{ borderRadius: '50%' }} />
                            &nbsp; &nbsp; &nbsp;Brainwave
                        </Navbar.Brand>
                        <Navbar.Toggle />

                        <Navbar.Collapse>
                            <Nav>
                                <Nav.Link href='cold-emails'>Cold Emails</Nav.Link>
                                <Nav.Link href='product-description'>Product Description</Nav.Link>
                                <Nav.Link href='tweets'>Tweets</Nav.Link>
                                <Nav.Link href='seo'>SEO</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}
export default Navigation