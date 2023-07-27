import {ChangeEvent, FC, FormEvent, useState} from "react";

import Button from "../../UI/Button/Button";

import "./TaskInput.css";

type Props = {
  onAddTask: (inputText: string) => void
}

const TaskInput: FC<Props> = ({onAddTask}) => {
  const [inputText, setInputText] = useState<string>("");

  const handleTaskInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault();
    onAddTask(inputText);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-control">
        <label>Задачи</label>
        <input type="text" onChange={handleTaskInputChange} />
      </div>
      <Button buttonType={"submit"}>Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
