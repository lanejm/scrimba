import {useState, useRef, useEffect} from "react"

function useWordGame() {
    const STARTING_TIME = 10;

    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const textBoxRef = useRef(null);
  
    function handleChange(e) {
      const { value } = e.target;
      setText(value);
    }
  
    function calculateWordCount(text) {
      const wordsArr = text.trim().split(" ");
      const filteredWords = wordsArr.filter((word) => word !== "");
      return filteredWords.length;
    }
  
    function startGame() {
      setIsTimeRunning(true);
      setTimeRemaining(STARTING_TIME);
      setText("");
      textBoxRef.current.disabled = false;
      textBoxRef.current.focus();
    }
  
    function endGame() {
      setIsTimeRunning(false);
      const numWords = calculateWordCount(text);
      setWordCount(numWords);
    }
  
    useEffect(() => {
      if (isTimeRunning && timeRemaining > 0) {
        setTimeout(() => {
          setTimeRemaining((time) => time - 1);
        }, 1000);
      } else if (timeRemaining === 0) {
        endGame();
      }
    }, [timeRemaining, isTimeRunning]);

    return {textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount}
}

export default useWordGame