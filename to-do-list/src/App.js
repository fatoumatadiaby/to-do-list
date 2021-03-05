import React from 'react'
import "./App.css"
import Form from './components/Form'
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="App">
     <header>
       Fatima's Todo List!
       </header>
       <Form/>
       <TodoList/>
    </div>
  );
}

export default App;
