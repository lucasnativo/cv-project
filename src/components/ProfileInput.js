import React, {useState} from "react"
import ProfileForm from "./ProfileForm"

const ProfileInput = ({updateTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({id: null,
    value: ""})
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return (<div></div>)
}