import './App.css';
import * as React from 'react';

const welcome = {
  title: 'Hey',
  greeting: 'React',
};

function App() {
  return (
    <>
      <div>
        <h1>
          {welcome.title} {welcome.greeting}
        </h1>
        <label htmlFor="search">Search : </label>
        <input id="search" type="text" />
      </div>
    </>
  );
}

export default App;
