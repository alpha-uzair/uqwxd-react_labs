import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  //states to edit the todos
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
  
  // Add the handlesubmit code here
  function handleSubmit(event){
    event.preventDefault(); //prevents from default submitting (default react function)

    //creating an object for new todo
    const newTodo={
      id: new Date().getTime(), //sets the id of the new todo
      text:todo.trim(),//trims spaces before and after the text
      completed:false
    };
    if(newTodo.text.length>0){
      setTodos([...todos].concat(newTodo));//changes the state and concatenate the new todo task 
      setTodo("");
    }else{
      alert(
        "invalid task"
      );
      setTodo("");
    }


  }
  
  // Add the deleteToDo code here
  function deleteToDo(id){
    //filtering the todos and removing the todo with the id (id is passed as a parameter, filter returns an array of todos with the id not equal to the id passed)
    let updatedTodos=[...todos].filter((todo)=>todo.id!==id);
    //updating the state after removing the todo
    setTodos(updatedTodos);
  }

  
  // Add the toggleComplete code here
  function toggleComplete(id){
    let updatedTodos=[...todos].map((todo)=>{
      if(todo.id===id){
        todo.completed=!todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  
  // Add the submitEdits code here
  function submitEdits(id){
    const updatedTodos=[...todos].map((todo)=>{
      if(todo.id===id){
        todo.text=editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}

            <button onClick={() => deleteToDo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
// return(
// <div className ="App">
// <h1>Todo List</h1>
// {/* onSubmit calls the handleSubmit */}
// <form onSubmit={handleSubmit}> 
// <input 
// type ="text" align ="right" 
// onChange={(evnt)=> setTodo(evnt.target.value)}
// placeholder="Add new task"
// value={todo}
// />
// <button type ="submit">Add Todo</button>
// </form>
// {todos.map((todo)=><div className="todo" key={todo.id}>
//   <div>{todo.text}<button onClick={()=>deleteToDo(todo.id)}>Delete</button><input type="checkbox" id="completed" checked={todo.completed}
//   onChange={()=>toggleComplete(todo.id)}></input></div>
// </div>)}
// </div>
// );
// };
export default App;
