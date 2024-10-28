import "./App.css";
import { BarGraph } from "./components/Bar";
import { LineGraph } from "./components/Line";
import { PieChart } from "./components/Pie";

function App() {
  return (
    <div className="App">
      <LineGraph />
      <BarGraph />
      <PieChart />
    </div>
  );
}

export default App;
