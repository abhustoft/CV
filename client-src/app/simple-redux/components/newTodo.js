import React from 'react'
import { connect } from 'react-redux'

const newTodo = ({onChange, onClick}) => (
  <div onClick={onClick}>
    <h3>New</h3>
    <input type="text" onKeyUp={onChange}/>
  </div>
)

export default newTodo
