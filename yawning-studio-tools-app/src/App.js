import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import ExamplePage from './pages/ExamplePage';

function App() {
  return (
    <div className="App">
      <h1>Yawning Studio Tools</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/example">Example Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/example" element={<ExamplePage />} />
      </Routes>
    </div>
  );
}

export default App;
