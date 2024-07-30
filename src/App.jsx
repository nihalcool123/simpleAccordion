import './App.css';
import { useState } from 'react';

const data = [
  { question: 'Question1', answer: 'Answer1' },
  { question: 'Question2', answer: 'Answer2' },
  { question: 'Question3', answer: 'Answer3' },
  { question: 'Question4', answer: 'Answer4' },
];

function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <>
      <div className="wrapper">
        <div className="accordion">
          {data.map((item, i) => (
            <div key={i} className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
