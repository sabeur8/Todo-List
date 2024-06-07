import React from "react";
import './Todo.css';
const Todo = (props) => {

    const handleClick = () => {
       props.deleteTodo(props.data);
    }
   
    return (
    <div>
        <li className="task">
        <span className="task-name"> {props.data } </span>
        <button className="delete-btn" onClick={handleClick}>🗑️</button>
        </li>
        
        
    </div>
    );

};

export default Todo ;