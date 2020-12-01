import React, { useState } from 'react';
// import styles from './Email.module.css';
import EmailInput from './EmailInput';

const Email = () => {
    return (
        <React.Fragment>
            <p>Please enter your email:</p>
            <EmailInput />
        </React.Fragment>
    );
};

export default Email;
