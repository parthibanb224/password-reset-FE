import React from 'react'
import MyImage from '../Assets/forgot-password.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useUser } from '../context/Users.context';

export default function Forgot() {

    const {input,setInput,handleMail} = useUser();

    return (
        <div>
            <div className='forgot-box'>
                <div>
                    <img src={MyImage} alt='login'></img>
                </div>
                <div className='input-box p-5'>
                    <Form className='mt-1' onSubmit={handleMail}>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control size='lg' type="email" placeholder="Email ID" onChange={e => setInput({...input,mail:e.target.value})} required />
                        </Form.Group>
                        <div className="d-grid mt-2">
                            <Button variant="primary" size="lg" type='submit'>
                                Send Reset Code
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
