import React, { useState } from 'react';
// import styles from './Email.module.css';
import axios from 'axios';

const EmailInput = () => {
    const [value, setValue] = useState({});

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
        console.log('useStatefulFields value: ', value);
    };
    console.log('handleInput: ', value);

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post('/audio-convert', value)
            .then(function (response) {
                console.log('login response:', response.data);
                /* if (response) {
                    location.replace('/');
                } else {
                    setError(true);
                } */
            })
            .catch(function (err) {
                console.log('err in  POST /create-idea: ', err);
            });
        //}
        console.log('login state:', this.state);
    }

    return (
        <React.Fragment>
            <div className="input-ctr">
                <label htmlFor="idea_title">Email:</label>
                <input onChange={(e) => handleChange(e)} type="text" name="email" autoComplete="false" placeholder="Enter your email" />
            </div>
            <button onClick={(e) => handleSubmit(e)} type="submit" name="emailSubmitted" value="emailSubmitted">
                Create project idea
            </button>
        </React.Fragment>
    );
};

export default EmailInput;
