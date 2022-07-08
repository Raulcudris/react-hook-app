import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer";

const initialState = [];

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos'));
}

export const UseTodos = () => {

 
 
    const [todos, dispatch] = useReducer(todoReducer , initialState , init )
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [] );
    }, [todos])
    

    const handleNewTodo = ( todo )=>{
        const action = {
            type : '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action );
    }

    const handleDeleteTodo = ( id )=>{
        //console.log({id})
        dispatch({
            type : '[TODO] Remove Todo',
            payload: id
        });
    }


    const handleToggleTodo = ( id )=>{
        //console.log({id})
        dispatch({
            type : '[TODO] Toggle Todo',
            payload: id
         });
    }
 
    return{
        todos,
        todosCount : todos.length,
        pendingTodosCount:todos.filter( todo=>!todo.done).length  ,
        handleNewTodo ,
        handleDeleteTodo,
        handleToggleTodo
    };
}
