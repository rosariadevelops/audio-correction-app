# Audio Correction App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Status:

Frontend screens/stubs set up for email input and audio recording.
Audio recording mp3 would be converted to a URL for database storage, via the mic-recorder-to-mp3 npm package.
NodeJS would perform the algorithm magic to assess the audio recording and correct any errors it may have.
Once correction is done it would send the corrected mp3 file back to the client and render a playback option and a download button.
