import React from 'react'

function TodoList(props) {
  return (
    <div className='list-item'>
       {props.item}
        <span className='icons'>
        <i class="fa-solid fa-trash icon-delete"
        onClick={e=>{
            props.deleteItem(props.item)
        }}></i>
        </span>
    </div>
  )
}

export default TodoList