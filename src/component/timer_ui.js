import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

let timeIndex = null;
class TimerUI extends Component {
    
    constructor(props) {
        super(props);
    }
    componentWillUpdate() {
        clearInterval(timeIndex);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        let { timeout } = this.props;
        const textDiv = document.querySelector('.timerFullBackground');
        
        timeIndex = setInterval(e => {
            timeout = timeout - 1;
            textDiv.innerText = timeout
            if(timeout <= 1)
                clearInterval(timeIndex);
        }, 1000);        
    }
    componentWillUnmount() {
        clearInterval(timeIndex);
    }

    render() {
        const { timeout } = this.props;
        return (
            <div className="timerFullBackground">
                {timeout}
            </div>
        );
    }
}

export default TimerUI;