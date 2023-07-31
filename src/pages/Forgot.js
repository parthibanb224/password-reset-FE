import React from 'react'
import MyImage from '../Assets/forgot-password.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Forgot() {
    return (
        <div>
            <div className='forgot-box'>
                <div>
                    <img src={MyImage} alt='login'></img>
                </div>
                <div className='input-box p-5'>
                    <Form className='mt-1'>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control size='lg' type="email" placeholder="Email ID" required />
                        </Form.Group>
                        <div className="d-grid mt-2">
                            <Button variant="primary" size="lg">
                                Send Reset Code
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
