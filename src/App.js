import './stylesheets/App.css';
import Dashboard from './Dashboard';
import { useApi } from "./hooks/hooks";

function App() {
  const { logs, newLog, athlete, initialCall, getLogs } = useApi();
  return (
    <div className="App">
      <Dashboard logs={logs} newLog={newLog} athlete={athlete} initialCall={initialCall} getLogs={getLogs} />
    </div>
  );
}

export default App;
