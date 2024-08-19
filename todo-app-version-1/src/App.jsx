import Addtodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem from "./Components/TodoItem";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <Addtodo />
      <TodoItem />
      <TodoItem2 />
    </center>
  );
}
export default App;
