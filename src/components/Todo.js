import React, { useState } from "react";
import './Todo.css';
const Todo = (props) => {

    const [nomClasse,setNomClasse] = useState('task-name');
    const handleDelete = () => {
       props.deleteTodo(props.data);
    }
    const handleEdit = () => {
        setNomClasse('task-completed')
    }
   
    return (
    <div>
        <li className="task">
        <span className={nomClasse}> {props.data } </span>
        <button className="delete-btn" onClick={handleDelete}>🗑️</button>
        </li>
        <button onClick={handleEdit}> ✏️ </button>
        
        
    </div>
    );

};

export default Todo ;