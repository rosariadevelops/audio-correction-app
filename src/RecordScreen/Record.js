import React, { useState, useEffect } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const Record = () => {
    const [isRecording, setIsRecording] = useState();
    const [mp3URL, setMp3URL] = useState();
    const [userPermission, setUserPermission] = useState();

    const getPermission = async () => {
        try {
            const microphonePermission = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });
            setUserPermission(microphonePermission);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getPermission();
    }, []);

    return (
        <React.Fragment>
            <p>Hit Record then send upload and send.</p>
        </React.Fragment>
    );
};

export default Record;
