import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  
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

  
  // Add the toggleComplete code here

  
  // Add the submitEdits code here

  
return(
<div className ="App">
<h1>Todo List</h1>
{/* onSubmit calls the handleSubmit */}
<form onSubmit={handleSubmit}> 
<input 
type ="text" align ="right" 
onChange={(evnt)=> setTodo(evnt.target.value)}
placeholder="Add new task"
value={todo}
/>
<button type ="submit">Add Todo</button>
</form>
{todos.map((todo)=><div className="todo" key={todo.id}>
  <div>{todo.text}</div>
</div>)}
</div>
);
};
export default App;
