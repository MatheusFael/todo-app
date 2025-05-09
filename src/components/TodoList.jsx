import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab, setSelectedTab } = props;

    
    const filterTodosList = selectedTab  == "All" 
    ? todos 
    : selectedTab== "Completed" 
    ? todos.filter(val => val.completed) 
    : todos.filter(val => !val.completed);   

    
    return (    
        <>
            {filterTodosList.map((todo, todoIndex) => {
                return (
                    <TodoCard key={todoIndex} todoIndex={todos.findIndex((v) => v.input == todo.input)} {...props} todo={todo}/>
                );
            })}
        </>
    );
}           