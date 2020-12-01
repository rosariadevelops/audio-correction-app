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

    function handleRecord(e) {
        e.preventDefault();
        if (userPermission) {
            ////
            Mp3Recorder.start()
                .then(() => {
                    setIsRecording(true);
                })
                .catch((err) => console.error(err));
        }
    }
    function stopRecord(e) {
        e.preventDefault();
        Mp3Recorder.stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const convertToURL = URL.createObjectURL(blob);
                setMp3URL(convertToURL);
                setIsRecording(false);
            })
            .catch((err) => console.log(err));
    }

    return (
        <React.Fragment>
            <p>Hit Record then send upload and send.</p>
            <audio src={mp3URL} controls="controls" />
            <button onClick={(e) => handleRecord(e)} disabled={isRecording}>
                Record
            </button>
            {isRecording && (
                <button onClick={(e) => stopRecord(e)} disabled={!isRecording}>
                    Stop
                </button>
            )}
        </React.Fragment>
    );
};

export default Record;
