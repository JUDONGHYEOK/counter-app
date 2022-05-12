import "./App.css";

import ButtonGroup from "./ButtonGroup";
import ShowCount from "./ShowCount";
import InputRange from "./InputRange";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <ShowCount />
        <InputRange />
        <ButtonGroup />
      </main>
    </div>
  );
}

export default App;
