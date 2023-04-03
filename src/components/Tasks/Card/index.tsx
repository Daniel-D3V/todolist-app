import { Task } from '@/types/Task'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import { GiCircle } from 'react-icons/gi';
import styles from './styles.module.sass'
import classnames from 'classnames';

type Props = {
    task: Task,
    onDelete: (taskId: string) => void,
    onComplete: (taskId: string) => void
}

export default function TasksCard({ task, onDelete, onComplete }: Props) {

    const handleClickDelete = () => {
        onDelete(task.id);
    }

    const handleClickComplete = () => {
        onComplete(task.id)
    }

    return (
        <div className={styles.taskCard}>
            <button className={styles.checkButton} onClick={handleClickComplete}>
                {task.completed ? (<BsFillCheckCircleFill />) : (<GiCircle />)}
            </button>

            <p className={classnames(styles.title, { [styles.title_completed]: task.completed })}>{task.title}</p>

            <button className={styles.deleteButton} onClick={handleClickDelete}>
                <TbTrash />
            </button>
        </div>
    )
}