import { FC } from 'react'

import TaskItem from '../../../models/TaskItem.ts'
import Task from '../Task/Task.tsx'

import styles from './TaskList.module.css'

type Props = {
  items: TaskItem[],
  onDeleteTask: (taskId: string) => void
}

const TaskList: FC<Props> = ({ items, onDeleteTask }) => (
  <ul className={styles.taskList}>
    {items.map((task) => (
      <Task key={task.id} id={task.id} onDelete={onDeleteTask}>
        {task.text}
      </Task>
    ))}
  </ul>
)

export default TaskList
