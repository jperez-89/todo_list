import "./List.css";
import trash from "../assets/trash.svg"

export default function List({ todos, handleDelete }) {
    /* Tratar de realizar las acciones en este archivo
    export default function List() {
    const [todos, setTodos] = useState([]);
    const onHandleSubmit = (e) => {
        e.preventDefault();

        if (e.target[0].value.trim() === "") {
            alert("Please enter a todo");
            return;
        }

        setTodos([...todos, {
            id: todos.length,
            name: e.target[0].value.trim(),
            done: false
        }]);

    };

    const handleDelete = (index) => {
        const filterTodos = todos.filter(todo => todo.id !== index);
        setTodos(filterTodos);
        // console.log(todos);
    }*/

    const handleCheck = (index, check) => {
        todos.forEach(todo => {
            if (todo.id === index) {
                alert(`Task ${todo.id + 1} done!!`)
                document.getElementById(`checkbox${todo.id}`).setAttribute("disabled", "true")
                todos[todo.id].done = check;
            }
        });

        console.log(todos);


        // const checkTodo = todos.map(todo => {
        //     if (todo.id === index) {
        //         document.getElementById(`checkbox${index}`).setAttribute("disabled", "true")
        //         return { ...todo, done: check };
        //     }
        //     else {
        //         // No cambia
        //         return todo;
        //     }
        // })
        // setTodos(checkTodo);
    }

    return (
        <>
            {todos.map((todo, index) => (
                <div className="Container" id={index} key={index}>
                    <div className="CheckField">
                        <input type="checkbox" onChange={(e) => handleCheck(index, e.target.checked)} className="CheckboxDonde" id={`checkbox${index}`} />
                    </div>
                    <div className="Todos">
                        <div className="Description">
                            <h2>{todo.name}</h2>
                        </div>
                        <div className="Icon">
                            <a href="#" onClick={() => handleDelete(index)} ><img src={trash} alt="edit" /></a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}