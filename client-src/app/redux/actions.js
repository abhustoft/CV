export const ADD_PROJECT = 'ADD_PROJECT';
export const TOGGLE_PROJECT = 'TOGGLE_PROJECT';
export const TOGGLE_DESCRIPTION = 'TOGGLE_DESCRIPTION';


export function editNew(txt){
  return {
    type: 'editNew',
    txt
  }
}

export function togglePhoto(){
  return {type: 'togglePhoto'}
}

export function toggleProject(id){
  return {type: TOGGLE_PROJECT, id}
}

export function toggleDescription(){
  return {type: TOGGLE_DESCRIPTION}
}

export function addProject(name, id){
  return {
    type: ADD_PROJECT,
    name: name,
    hide: true,
    id
  }
}




