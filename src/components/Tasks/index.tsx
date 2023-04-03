import { Task } from '@/types/Task'
import TasksCard from './Card'
import styles from './styles.module.sass'
import classnames from 'classnames';

type Props = {
    isLoading: boolean,
    tasks: Task[],
    onDelete: (taskId: string) => void,
    onComplete: (taskId: string) => void
}

export default function Tasks({ isLoading, tasks, onDelete, onComplete }: Props) {
    return (
        <div className={styles.tasks}>
            <div className={styles.tasks_header}>
                <div className={styles.left}>
                    <p className={styles.title}>Tarefas criadas</p>
                    <span className={styles.value}>{tasks.length}</span>
                </div>
                <div className={styles.right}>
                    <p className={styles.title}>Completados</p>
                    <span className={styles.value}>{tasks.filter((task: Task) => task.completed).length} de {tasks.length}</span>
                </div>
            </div>

            <div className={styles.tasks_list}>
                {isLoading && (
                    <div className={styles.loading}>
                        <span className={classnames(styles.spinner, 'spinner-border')}></span>
                        <p className={styles.title}>Carregando...</p>
                    </div>
                )}

                {!isLoading && tasks.map(task => (
                    <TasksCard task={task} onDelete={onDelete} onComplete={onComplete} key={task.id} />
                ))}
            </div>
        </div>
    )
}