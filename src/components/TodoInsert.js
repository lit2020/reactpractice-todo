import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { TiPencil, TiTrash } from "react-icons/ti";
import './TodoInsert.css';

const TodoInsert = ({ selectedTodo, onInsertToggle, onInsertTodo, onDelete, onEdit }) => {
   const [value, setValue] = useState('')

   const onChangeValue = (e) => {
      setValue(e.target.value);
   }

   const onSubmit = (e) => {
      e.preventDefault();// submit버튼 눌렀을때 브라우저의 디폴트 새로고침 차단
      onInsertTodo(value)
   }

   const onClickEdit = (e) => {
      e.preventDefault();
      onEdit(selectedTodo.id, value);
   }

   const onClickDelete = () => {
      onDelete(selectedTodo.id);
   }
   useEffect(() => {
      // case : 이전에 등록된 todo항목을 선택 했을 때
      if (selectedTodo) {
         setValue(selectedTodo.text);
      }
   }, [selectedTodo]);

   return (
      <div>
         <div className="background" onClick={onInsertToggle}></div>
         <form onSubmit={ selectedTodo ? onClickEdit: onSubmit}>
            <input className="input" placeholder="please type" value={value} onChange={onChangeValue}></input>
            {
               selectedTodo ?
                  (
                     <div className="button-rewrite">
                        <button>
                           <TiPencil onClick={onClickEdit} />
                        </button>
                        <button>
                           <TiTrash onClick={onClickDelete} />
                        </button>

                     </div>
                  )
                  : (<button type="submit">
                     <MdAddCircle />
                  </button>)}
         </form>
      </div>
   );
}

export default TodoInsert;