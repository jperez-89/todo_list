import "./AddTodo.css";

export default function AddTodo({ onHandleSubmit }) {
    return (
        <>
            <h2>TODO LIST</h2>
            <form onSubmit={onHandleSubmit}>
                <input type="text" id="InputTodo" placeholder="New todo" />
                <button type="submit">Add</button>
            </form>
        </>
    )
}