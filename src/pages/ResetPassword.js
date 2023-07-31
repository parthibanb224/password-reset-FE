import React, {useState} from 'react'
import MyImage from '../Assets/icons8-password-reset-48.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import showPwdImg from '../Assets/Show-password.svg';
import hidePwdImg from '../Assets/Hide-password.svg';

export default function ResetPassword() {

    const [passwordMode, setPasswordMode] = useState(false);

    return (
        <div>
            <div className='resetPassword-box'>
                <div>
                    <img src={MyImage} alt='reset'></img>
                </div>
                <div className='input-box p-5'>
                    <Form className='mt-1'>
                        <div className="pwd-container">
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Control size='lg' type={passwordMode ? "text" : "password"} placeholder="New Password" required />
                            </Form.Group>
                            <img
                                title={passwordMode ? "Hide password" : "Show password"}
                                src={passwordMode ? showPwdImg : hidePwdImg}
                                onClick={() => setPasswordMode(prevState => !prevState)}
                                alt='password gif'
                            />
                        </div>
                        <div className="pwd-container">
                            <Form.Group className="mb-5" controlId="exampleForm.ControlInput2">
                                <Form.Control size='lg' type={passwordMode ? "text" : "password"} placeholder='Confirm Password' required />
                            </Form.Group>
                            <img
                                title={passwordMode ? "Hide password" : "Show password"}
                                src={passwordMode ? showPwdImg : hidePwdImg}
                                onClick={() => setPasswordMode(prevState => !prevState)}
                                alt='password gif'
                            />
                        </div>
                        <div className="d-grid mt-3 text-center">
                            <Link to='/PasswordChanged'>
                                <Button variant="primary" size="lg">
                                    Reset Password
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
