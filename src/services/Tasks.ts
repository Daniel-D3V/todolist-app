import { Task } from "@/types/Task";

export const loadTasksFromStorage = () => {
    const saved = localStorage.getItem('todo:tasks');
    if (saved) return JSON.parse(saved);
    return [];
};

export const saveTasksToStorage = (tasks: Task[]) => {
    localStorage.setItem('todo:tasks', JSON.stringify(tasks));
};

export const addTask = (tasks: Task[], title: string) => {
    const newTask: Task = {
        id: crypto.randomUUID(),
        title,
        completed: false,
    };
    return [...tasks, newTask];
};

export const deleteTaskById = (tasks: Task[], taskId: string) => {
    return tasks.filter((task) => task.id !== taskId);
};

export const toggleTaskCompletedById = (tasks: Task[], taskId: string) => {
    return tasks.map((task) => {
        if (task.id === taskId) return {
            ...task,
            completed: !task.completed,
        };

        return task;
    });
};