import React from 'react';
import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import IconDisplay from './components/IconDisplay';

function App() {

  const [inputText, setInputText] = useState('');
  const [iconUrl, setIconUrl] = useState("https://hips.hearstapps.com/hmg-prod/images/vibrant-pink-and-white-summer-flowering-cosmos-royalty-free-image-1653499726.jpg?crop=0.66541xw:1xh;center,top&resize=980:*");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Product Idea Input, Icon, and Recommendation App</code> 
        </p>
        <a
          className="App-link"
          href="https://github.com/harshkhasbage77/product-idea-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
        <div className='web-app'>
          <div className='icon-recommendation'>
            <InputField />
            <IconDisplay iconUrl={iconUrl}/>
          </div>
          <div className='product-recommendation'>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
