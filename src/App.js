import React from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import MicRecorder from 'mic-recorder-to-mp3';
import Email from './Email';

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <div className="App">
                    <h1>Correct your audio</h1>
                    <p>Record your audio and have it corrected for grammatical errors.</p>
                    <Route
                        render={({ location }) => (
                            <TransitionGroup>
                                <CSSTransition key={location.key} timeout={300} classNames="fade">
                                    <Switch location={location}>
                                        <Route path="/" component={Email} />
                                        {/* <Route path="/record" component={Record} /> */}
                                        {/* <Route path="/download" component={Download} /> */}
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )}
                    />
                </div>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
