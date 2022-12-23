import {Component} from 'react'

import {v4} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

class TodoList extends Component {
  state = {todoInput: '', TodoItemList: []}

  onChangeTodo = e => {
    this.setState({todoInput: e.target.value})
  }

  onSubmitTodo = e => {
    e.preventDefault()
    const {todoInput} = this.state
    if (todoInput === '') {
      alert('write something')
    } else {
      const newTodo = {
        Todo: todoInput,
        id: v4(),
      }

      this.setState(prevState => ({
        TodoItemList: [...prevState.TodoItemList, newTodo],
        todoInput: '',
      }))
    }
  }

  deleteTodo = id => {
    const {TodoItemList} = this.state
    const updatedTodoItemLost = TodoItemList.filter(
      eachTodo => eachTodo.id !== id,
      console.log(`${id}`),
    )

    this.setState({
      TodoItemList: updatedTodoItemLost,
    })
  }

  render() {
    const {todoInput, TodoItemList} = this.state

    return (
      <div className="container">
        <div className="text-center header">
          <h1>Todo Management</h1>
          <form onSubmit={this.onSubmitTodo}>
            <input
              value={todoInput}
              type="text"
              placeholder="Enter Todo"
              onChange={this.onChangeTodo}
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
        <hr />
        <div>
          {TodoItemList.length > 0 ? (
            <ul>
              {TodoItemList.map(each => (
                <TodoItem
                  key={each.id}
                  todoDetails={each}
                  deleteTodo={this.deleteTodo}
                  onCheckBox={this.onCheckBox}
                />
              ))}
            </ul>
          ) : (
            <h1 className="text-center mt-5">Write something</h1>
          )}
        </div>
      </div>
    )
  }
}
export default TodoList
