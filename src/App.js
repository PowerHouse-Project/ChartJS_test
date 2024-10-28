import "./App.css";
import { BarGraph } from "./components/Bar";
import { LineGraph } from "./components/Line";

function App() {
  return (
    <div className="App">
      <LineGraph />
      <BarGraph />
    </div>
  );
}

export default App;
