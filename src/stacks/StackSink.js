import React from 'react';
import WordsSinked from '../state/WordsSinked';

const Word = ({word}) =>{
    return <li className="list-group-item d-flex justify-content-between align-items-center">
        {word.name}
        <i className="fa fa-paper-plane" />
      </li>
    }
    
    const WordList = ({words}) => {
        return <ul className="list-group">
          {words.map(w=> <Word word={w} key={w.name} />)}
      </ul>
    }
    
    class WordSink extends React.Component {
        constructor(props){
          super(props);
        this.state = {words:WordsSinked};
      };
     render() {
     return <div>
          <WordList words={this.state.words} />
      </div>
      }
    }

    export default WordSink;