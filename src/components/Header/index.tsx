"use client";

import { useState } from 'react';
import styles from './styles.module.sass';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Image from 'next/image';

type Props = {
    handleAddTask: (title: string) => void
}

export default function Header({ handleAddTask }: Props) {
    const [title, setTitle] = useState<string>('');

    const handleChangeTitle = (event: any) => {
        setTitle(event.target.value);
    }

    const handleClickSubmit = (event: any) => {
        event.preventDefault();
        handleAddTask(title)
        setTitle('');
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src="/logo.svg" width={200} height={50} alt="Todolist" />
            </div>
            <form onSubmit={handleClickSubmit} className={styles.header_form}>
                <input type="text" placeholder='Adicionar nova tarefa' onChange={handleChangeTitle} value={title} className={styles.header_form_input} />
                <button type='submit' className={styles.header_form_button}><span>Criar</span> <AiOutlinePlusCircle size={20} /></button>
            </form>
        </header>
    )
}