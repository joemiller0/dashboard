import './stylesheets/App.css';
import Dashboard from './Dashboard';
import { useApi } from "./hooks/hooks";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
