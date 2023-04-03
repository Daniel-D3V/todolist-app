"use client";

import Container from '@/components/Container'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Tasks from '@/components/Tasks'
import { addTask, deleteTaskById, loadTasksFromStorage, saveTasksToStorage, toggleTaskCompletedById } from '@/services/Tasks';
import { Task } from '@/types/Task';
import { useEffect, useState } from 'react';
import styles from './page.module.sass'

export default function RootPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await loadTasksFromStorage();
      setTasks(tasks);
      setIsLoading(false)
    }
    fetchTasks();
  }, [])

  const handleCreateTask = (taskTitle: string) => {
    if (taskTitle.length < 1) return;
    setTasks(addTask(tasks, taskTitle))
  }

  const handleDeleteTask = (taskId: string) => {
    setTasks(deleteTaskById(tasks, taskId))
  }

  const handleCompleteTask = (taskId: string) => {
    setTasks(toggleTaskCompletedById(tasks, taskId))
  }

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks])

  return (
    <main className={styles.main}>
      <Container>
        <Header handleAddTask={handleCreateTask} />
        <Tasks isLoading={isLoading} tasks={tasks} onDelete={handleDeleteTask} onComplete={handleCompleteTask} />
        <Footer />
      </Container>
    </main>
  )
}
