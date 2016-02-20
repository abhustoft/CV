import Immutable from 'immutable'

export default (state = Immutable.List(['Code More!']), action) => {
  switch(action.type) {
    case 'addTodo':
      console.log('Handle action addTodo, set state ', action);
      return state.unshift(action.todo)
    case 'editNew':
      console.log('Handle action editNew, set state ', action);
      return state.unshift(action.txt)
    default:
      return state
  }
}
