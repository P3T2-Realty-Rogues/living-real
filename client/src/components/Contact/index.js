import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {RiArrowGoBackLine} from "react-icons/ri";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (

            <div className="card">
                <div className="card-header">
                    <h3 className="card-header">Send a Maintenance Request </h3>
                </div>
                <div className="card-body">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-input">
                            <label className="form-input" htmlFor="name">Name:</label>
                            <input className="form-input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                            <label className="form-input" htmlFor="email">Email address:</label>
                            <input className="form-input"  type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div className="contact-form-body">
                            <label className="form-input" htmlFor="message">Request Details:</label>
                            <textarea className="form-input" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}

                    </form>
                    <div>
                        <button className="create-btn" data-testid="button" type="submit">Submit</button>
                    </div>
                    <Link to="/TenantDash/ :id" className="back-btn">
                <RiArrowGoBackLine size={30} color="var(--light)"></RiArrowGoBackLine>
                <p>Back</p>
              </Link>
                </div>
            </div>
            


    );
}

export default ContactForm;