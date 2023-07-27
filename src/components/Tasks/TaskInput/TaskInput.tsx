import { ChangeEvent, FC, FormEvent, useState } from 'react'

import Button from '../../UI/Button/Button'

import './TaskInput.css'

type Props = {
  onAddTask: (inputText: string) => void
}

const TaskInput: FC<Props> = ({ onAddTask }) => {
  const [inputText, setInputText] = useState<string>('')
  const [isInputValid, setIsInputValid] = useState<boolean>(true)

  const handleTaskInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.value.trim()) {
      setIsInputValid(true)
    }
    setInputText(event.target.value)
  }

  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault()
    if(!inputText.trim()) {
      setIsInputValid(!isInputValid)
      return
    }
    onAddTask(inputText)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-control">
        <label style={{color: !isInputValid ? 'red' : 'black'}}>Задачи</label>
        <input type="text" onChange={handleTaskInputChange} style={{borderColor: !isInputValid ? 'red' : 'black', backgroundColor: !isInputValid ? 'salmon' : 'transparent'}} />
      </div>
      <Button buttonType={'submit'}>Добавить Задачу</Button>
    </form>
  )
}

export default TaskInput
