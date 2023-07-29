import { FC, ReactNode } from 'react'

import styles from './Task.module.css'

type Props = {
  id: string
  onDelete: (id: string) => void
  children: ReactNode
}

const Task: FC<Props> = ({ onDelete, id, children }) => {
  // const [deleteText, setDeleteText] = useState('');

  const handleDelete = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id)
  }

  return (
    <li className={styles.taskItem} onClick={handleDelete}>
      {children}
    </li>
  )
}

export default Task
