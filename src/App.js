import { useState } from "react";
import "./styles.css";
const emojiObj = {
  "😊": "smiling",
  "🙁": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😲": "disbelief",
  "😑": "annoyance"
};
export default function App() {
  const [meaning, setMeaning] = useState("");

  const inputHandler = (event) => {
    console.log(event.target.value);
    const val = emojiObj[event.target.value];
    if (val !== undefined) {
      setMeaning(val);
    } else {
      setMeaning("This value is not in our database!");
    }
  };
  const emojiClickHandler = (item) => {
    console.log(item);
    setMeaning(emojiObj[item]);
  };
  return (
    <div className="App">
      <h1>Inside outtt!</h1>

      <input onChange={inputHandler} />
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {Object.keys(emojiObj).map((item) => (
        <span
          key={item}
          value={item}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          onClick={emojiClickHandler.bind(null, item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
