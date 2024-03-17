import { useState } from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { MdAddCircle } from 'react-icons/md';

let nextId = 4;
function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "todo 1",
      checked: true
    },
    {
      id: 2,
      text: "todo 2",
      checked: false
    },
    {
      id: 3,
      text: "todo 3",
      checked: true
    }
  ])

  const onInsertToggle = () => {
    setSelectedTodo(null);
    setInsertToggle(!insertToggle);
  }

  const alertPleaseTypeSchedule = (from) => {
    alert(`please type schedule ${from}`);
  }

  const confirmDelete = () => {
    return window.confirm("Want to delete?");
  }

  const onInsertTodo = (text) => {
    if (text === "") {
      alertPleaseTypeSchedule("onInsertTodo");
      return false;
    }
    const todo = {
      id: nextId,
      text: text,
      checked: false
    }
    setTodos(todos.concat(todo));
    onInsertToggle();
    nextId++;
    return true;
  }

  const onCheckToggle = (id) => {
    setTodos(todos.map((todo) => (
      todo.id == id ? { ...todo, checked: !todo.checked } : todo
    )))
  }

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  }

  const onEdit = (id, newText) => {
    if (newText === "") {
      alertPleaseTypeSchedule("onEdit");
      return false;
    }
    onInsertToggle();
    setTodos(todos => todos.map((todo) => (
      todo.id == id ? { ...todo, text: newText } : todo
    )));
  }

  const onDelete = (id) => {
    if (confirmDelete()) {
      onInsertToggle();
      setTodos(todos.filter(todo => todo.id !== id));
    }
  }

  return (
    <Template todoLength={todos.length}>
      <TodoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}

      />
      <div className='add-todo-button' onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
    </Template>
  )
}

export default App;
