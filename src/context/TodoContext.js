// Importing necessary functions from the 'react' library and 
import {createContext , useContext} from 'react'


// Creating a React context named 'TodoContext' with an initial value
export const  TodoContext = createContext({
   // Initial array of todos with one default todo item
   todos : [
    {
      id :1 ,
      todo : "Todo msg",
      completed : false ,
   }
] ,
// Placeholder functions for managing todos only function 
addTodo : (todo)=>{},
   updateTodo : (id ,todo)=>{},
   deleteTodo : (id)=>{},
   toggleComplete : (id)=>{},

});


// Custom hook for easily consuming the 'TodoContext' useContext ke sath value leni hogi 

export const useTodo = () => {
    return useContext(TodoContext)
};

// Creating a provider component named 'TodoProvider
export const TodoProvider =TodoContext.Provider