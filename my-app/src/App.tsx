import React, { createContext } from 'react';  
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import useMousePosition from './hooks/useMousePosition'// 引入自定义组件
import Show from'./components/useRef'

interface IStyleProps {
  [key: string]: {color: string; background: string}
}

const themes: IStyleProps = {
  'light': {
    color:'#000',
    background: 'red'
  },
  'dark': {
    color:'#fff',
    background: '#222'
  }
}

export const ThemeContext = createContext(themes.light)
function App() {
  const position = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={themes.light}>
        <img src={logo} className="App-logo" alt="logo" />
        <Hello message={position.x+''} />
        <Show/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
