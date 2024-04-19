import Editor from './components/Editor'
import './App.css';

function App() {
  return (
    <div>
      <h1>Collaborative Code Pen</h1>
      <Editor value={'const message = "Hello, world!";'} />
    </div>
  );
}

export default App;