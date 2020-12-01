import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Email = () => {
    const [value, setValue] = useState({});
    const [error, setError] = useState();

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
            .post('/add-email', value)
            .then(function (response) {
                console.log('login response:', response.data);
                if (response) {
                    console.log('Email submitted');
                    <Redirect to="/record" />;
                } else {
                    setError(true);
                }
            })
            .catch(function (err) {
                console.log('err in  POST /add-email: ', err);
            });
    }

    return (
        <React.Fragment>
            <div className="input-ctr">
                <label htmlFor="idea_title">Please enter your email:</label>
                <input onChange={(e) => handleChange(e)} type="text" name="email" autoComplete="false" placeholder="Enter your email" />

                {error && <p className="error">{error}</p>}
                <button onClick={(e) => handleSubmit(e)} type="submit" name="emailSubmitted" value="emailSubmitted" className="button email">
                    Next
                </button>
            </div>
        </React.Fragment>
    );
};

export default Email;
