import React from 'react';
import ReactDom from 'react-dom';

// const el = <h1>Hello World</h1>;

// ReactDom.render(el, document.getElementById('root'));

const el = (
  <div>
    <h1>My Todo List</h1>
    <input placeholder="search"></input>
    <ul>
      <li>Lern React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);

ReactDom.render(el, document.getElementById('root'));