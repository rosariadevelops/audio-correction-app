import React, { useState } from 'react';
// import styles from './Email.module.css';
import MicRecorder from 'mic-recorder-to-mp3';

const Record = () => {
    return (
        <React.Fragment>
            <p>Hit Record then send upload and send.</p>
            <EmailInput />
        </React.Fragment>
    );
};

export default Record;
