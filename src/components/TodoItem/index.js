import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {Todo, id} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <input className="checkbox-box" type="checkbox" />
      <h1 className="title">{Todo}</h1>
      <button
        type="button"
        className="custom-button btn btn-danger"
        onClick={onDeleteTodo}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
