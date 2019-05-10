import React, { Component } from 'react';
import Sentence from './component/sentence';
import './App.css';

const SHORT_TIME = 1;
const MID_TIME = 3;
const LONG_TIME = 5;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 'start',
      language: '',
      time: 1,
      interval: null,
    }
    
    this.start = this.start.bind(this);
    this.speedSet = this.speedSet.bind(this);
  }

  
  speedSet(speed) {
    switch (speed) {
      case 'short':
        this.setState({
          progress: 'sentence',
          time: SHORT_TIME,
          //interval: setInterval(this.changeSentence(), SHORT_TIME + textLengthTime)
        });
        break;
      case 'mid':
        this.setState({
          progress: 'sentence',
          time: MID_TIME,
          //interval: setInterval(this.changeSentence(), MID_TIME + textLengthTime)
        });
        break;
      case 'long':
        this.setState({
          progress: 'sentence',
          time: LONG_TIME,
          //interval: setInterval(this.changeSentence(), LONG_TIME + textLengthTime)
        });
        break;
      default:
        this.setState({
          progress: 'sentence',
          time: LONG_TIME,
          //interval: setInterval(this.changeSentence(), LONG_TIME + textLengthTime)
        });
        break;
    }
  }
  start() {
    this.setState({ progress: 'speed' });
  }

  

  render() {
    const { progress, time } = this.state;
    return (
      <div className="App">
        {progress === 'start'
          ? <div className="start" onClick={this.start}>
            시작
          </div>
          : progress === 'speed'
            ? <div className="start">
              <span className="speedBtn" onClick={() => this.speedSet('long')}>느림</span>
              <span className="speedBtn" onClick={() => this.speedSet('mid')}>중간</span>
              <span className="speedBtn" onClick={() => this.speedSet('short')}>빠름</span>
            </div>
            : progress === 'sentence'
              ? <div><Sentence time={time}></Sentence>
                <button type='button' onClick={() => this.start()}>다시시작</button>
                </div>
              : <div></div>
        }

      </div>
    );
  }
}

export default App;
