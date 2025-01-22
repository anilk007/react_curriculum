import './App.css';

import Greeting from './components/greeting/Greeting'
import Counter from './components/counter/Counter'


function App() {
  return (
    <div className="App">

      <Greeting greetName="Ramesh"></Greeting>

      <Counter></Counter>

    </div>
  );
}

export default App;
