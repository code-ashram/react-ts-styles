import { ChangeEvent, FC, FormEvent, useState } from 'react'

import Button from '../../UI/Button/Button'

import styles from './TaskInput.module.css'

type Props = {
  onAddTask: (inputText: string) => void
}

const TaskInput: FC<Props> = ({ onAddTask }) => {
  const [inputText, setInputText] = useState<string>('')
  const [isInputValid, setIsInputValid] = useState<boolean>(true)

  const handleTaskInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.trim().length) {
      setIsInputValid(true)
    }
    setInputText(event.target.value)
  }

  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault()
    if (!inputText.trim().length) {
      setIsInputValid(false)
      return
    }
    onAddTask(inputText)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={`${styles.formControl}${!isInputValid ? ` ${styles.invalid}` : ""}`}>
        <label >Задачи</label>
        <input type="text" onChange={handleTaskInputChange} />
      </div>
      <Button buttonType={'submit'}>Добавить Задачу</Button>
    </form>
  )
}

export default TaskInput
