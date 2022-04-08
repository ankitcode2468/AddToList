import React from 'react'
import { Todo } from "../myComponents/Todo"

export const Todos = (props) => {
    let myStyle={
        minHeight:"20vh",
        margin:"40px auto"
    }
    return (
        <div className="container">
            <h3 className="text-center my-3" style={myStyle}>Todos List</h3>
            {props.todos.lengh === 0 ? "No Items to be deleted" :
                props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.sno} ondelete={props.ondelete} />
                }
                )
            }



        </div>
    )
}
