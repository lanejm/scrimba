import React, {useState} from "react";
import './styles.css';

function App() {
  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(5)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function wordCount(text) {
    const wordsArr = text.trim().split(" ")
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length;
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea 
        onChange={handleChange}
        value={text}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={() => wordCount(text)}>Start New Game</button>
      <h1>Word Count: </h1>
    </div>
  );
}

export default App;
