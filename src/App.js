import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/Todos';
import TodoItem from './components/TodoItem';
import DisplayTodos from './components/DisplayTodos';

function App() {
  return (
    <div className="App">
      <Todos />
      <DisplayTodos/>
 
    </div>
  );
}

export default App;
