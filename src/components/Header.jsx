export function Header(props) {
    const { todos } = props;
    const todosLength =  todos.length
    const pluralOrSingular = todosLength > 1 ? "tasks" : "task";

    return (
        <header>
            <h1 className =  "text-gradient">
                You Have {todosLength} open {pluralOrSingular}.
            </h1>
        </header>
    )
}       