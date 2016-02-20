import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './newTodo'
import { addTodo } from '../actions/index'
import { editNew } from '../actions/index'

const Todos = ({todos, dispatch}) => (
  <div>
    <h1>Todos</h1>
    <NewTodo onChange={e => {
        if(e.keyCode == 13){
          console.log(e.target.value);
          dispatch(addTodo(e.target.value))
          e.target.value = ''
        }
      }}
      onClick={e => {
        console.log(e.target);
        dispatch(editNew('cliecked to edit'));
      }}
    />
    {todos.map((todo, index) => <p key={index}>{todo}</p>)}
  </div>
);

function mapStateToProps(todos) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(Todos)
