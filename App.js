import React, {useState} from 'react'
import "./App.css"
import TodoInput from './TodoInput';
import TodoList from './TodoList';



function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo, inputText]);
  }
  const deleteListItem = (key)=>{
    let newlistTodo = [...listTodo];
    newlistTodo.splice(key,1)
    setListTodo([...newlistTodo])
  }
  return (
      <div className = 'main-container'>
<div className='center-container'>
<TodoInput addList={addList}/>

<h1 className='app-heading'>Todo List</h1>
<hr/>
{listTodo.map((listItem, i)=>{
  return(
    <TodoList key={i} index={i} item={listItem} deleteItem = {deleteListItem}/>
  )
})}
</div>    
</div>
  )
}

export default App

