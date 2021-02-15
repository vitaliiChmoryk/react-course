import { CreateElement, ReactComponent, ReactPureComponent, FunctionalComponent } from "./Component";
import './App.css';

function App() {
  return (
    <div className="App">
        {CreateElement}
      <ReactComponent/>
      <ReactPureComponent/>
      <FunctionalComponent/>
    </div>
  );
}

export default App;
