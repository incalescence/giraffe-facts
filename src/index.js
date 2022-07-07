import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <header>
      <br />
    </header>
    <h1>Here are some fun facts about <mark className='pink'>giraffes</mark>🦒!</h1>
    <Content />
    <br />
    <footer className='footer'>made with <mark className='pink'>♥</mark> and React.js</footer>
  </div>
);

function MainBlock() {
  return (
    <div class="main">
      <img src="./giraffe.jpg" className="image" />
      <br />
      <Facts />
    </div>
  )
}
function Facts() {
  return (
    <div>
      <ul className="list">
      <li>Giraffes are the tallest mammal in the world!</li>
      <li>Giraffes spend most of their lives standing up; they even sleep and give birth standing up.</li>
      <li>Giraffes only need to drink once every few days. Most of their water comes from all the plants they eat.</li>
      <li>Adult giraffes get by on just 30 minutes of sleep a night (on average).</li>
      <li>A giraffe’s spots are much like human fingerprints. No two individual giraffes have exactly the same pattern.</li>
      </ul>
    </div>

  )
}

function Content() {
  return (
    <div className='content'>
      <MainBlock />
      <Buttons />
    </div>
  )
}

function Buttons() {
  return (
    <div className='buttons'>
        <a href="https://en.wikipedia.org/wiki/Giraffe" target="_blank" rel="noreferrer">
          <button className='button'>Find out more!</button>
        </a>
        <a href="https://github.com/incalescence/giraffe-facts" target="_blank" rel="noreferrer">
          <button className='button'>Source code</button>
        </a>
    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

