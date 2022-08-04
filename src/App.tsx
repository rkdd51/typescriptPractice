import "./styles.css";
import Props from "./Props";
import State from "./State";
export default function App() {
  return (
    <div className="App">
      <Props headerName="Rahul" surname="Dubey" />
      <State />
    </div>
  );
}
