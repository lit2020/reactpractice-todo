import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import './TodoItem.css';

const TodoItem = ({todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) => {
   const { id, text, checked } = todo;

   const onClickTodo = () => {
      onInsertToggle();
      onChangeSelectedTodo(todo);
   }

   return (
      <div className="TodoItem">
         <div className={`content ${checked ? 'checked' : ''}`}>
            <button className="check-box" onClick={() => {
               onCheckToggle(id)
            }}>
               {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </button>
            <div className="text" onClick={onClickTodo}>{text}</div>
         </div>
      </div>
   )
}

export default TodoItem;