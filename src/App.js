import Editor from './components/Editor'
import React, {useState} from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState("default");
  const [language, setLanguage] = useState("Javascript");

  const handleThemeChange = (event) => {
    console.log("we in")
    setTheme(event.target.value);
  }

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <h1>Collaborative Code Pen</h1>
      <Editor value={'const message = "Hello, world!";'} theme={theme} language={language}/>
      <label htmlFor="themeSelect">Theme: </label>
      <select id="themeSelect" value={theme} onChange={handleThemeChange}>
        <option value="default">Light theme</option>
        <option value="base16-dark">Dark theme</option>
      </select>
      <label htmlFor="languageSelect">Language: </label>
      <select id="languageSelect" value={language} onChange={handleLanguageChange}>
        <option value="Javascript">Javascript</option>
        <option value="C++">C++</option>
        <option value="C">C</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
      </select>
    </div>
  );
}

export default App;