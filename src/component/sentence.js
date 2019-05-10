import React, { Component } from 'react';
import { SENTENCE_DATA } from '../const/sentence';

const DATA = SENTENCE_DATA;

class Sentence extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sentence: '',
            key: '',
            language: '',
            timeout: 0,
        }

        this.changeSentence = this.changeSentence.bind(this);
    }

    changeSentence() {
        const { sentence, key, language } = this.state;
        const { time } = this.props;
        let index = 0;
        console.log('changeSentence into')

        sentence === ''
            ? index = this.randKey()
            : language === 'eng'
                ? index = this.indexPick(sentence)
                : index = key;

        console.log('changeSentence sentence progress into');

        let nextSentence = '';
        let nextLanguage = '';
        if (language === 'kor') {
            nextSentence = DATA[index].eng;
            nextLanguage = 'eng';
        }
        else if (language === 'eng' || language === '') {
            nextSentence = DATA[index].kor;
            nextLanguage = 'kor';
        }

        let timeout = (time * 1000) + (nextSentence.length * 150);
        console.log(timeout);

        setTimeout(e => this.changeSentence(), timeout);
        this.setState({ sentence: nextSentence, key: index, language: nextLanguage, timeout });
    }
    randKey() {
        const min = 1;
        const max = DATA.length;
        return Math.floor(Math.random() * (max - min + 1) + min) - 1
    }
    indexPick(sentence) {
        let notPick = true;
        let pickIndex = 0;
        while (notPick) {
            pickIndex = this.randKey();
            (DATA[pickIndex] === sentence)
                ? notPick = true
                : notPick = false
        }
        return pickIndex;
    }

    componentDidMount() {
        this.changeSentence();
    }
    componentDidUpdate() {
        const { timeout } = this.state;
        const textDiv = document.querySelector('.overlay');

        textDiv.style.transition = '';
        textDiv.style.height = "0%";
        textDiv.style.transition = timeout + 's linear';

        textDiv.style.height = "100%";
    }

    render() {
        const { sentence } = this.state;
        return (
            <div className='sentence'>
                {sentence}
                <div className='overlay'>
                    {sentence}
                </div>
            </div>
        );
    }
}

export default Sentence;