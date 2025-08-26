import { TaskProps } from '../types/types';

export const fetchTasks = async (): Promise<TaskProps[]> => {
	const response = await fetch('http://localhost:5001/tasks');
	if (!response.ok) {
		throw new Error('Failed to fetch tasks');
	}
	return response.json();
};

export const toggleCompletion = async (
	id: number,
	tasks: TaskProps[],
	setTasks: (tasks: TaskProps[]) => void,
): Promise<void> => {
	const task = tasks.find((task) => task.id === id);
	if (!task) return;

	try {
		const updatedTask = { ...task, completedStatus: !task.completedStatus };
		const response = await fetch(`http://localhost:5001/tasks/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(updatedTask),
		});

		if (response.ok) {
			setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
		} else {
			console.error('Failed to update task');
		}
	} catch (error) {
		console.error('Error updating task:', error);
	}
};
