import styles from './styles.module.sass';

type Props = {
    children: React.ReactNode
}

export default function Container({ children }: Props) {
    return (
        <div className={styles.container}>{children}</div>
    )
}