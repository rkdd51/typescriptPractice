import "./styles.css";
import Props from "./Props";
import State from "./State";
import Form from "./Form";
import Union from "./Union";

import GenericParent from "./GenericParent";
export default function App() {
  return (
    <div className="App">
      {/* <Props headerName="Rahul" surname="Dubey" />
      <State /> */}
      {/* <Form /> */}
      {/* <Union /> */}
      <GenericParent />
    </div>
  );
}
