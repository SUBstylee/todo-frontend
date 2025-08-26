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
	setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>,
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
			setTasks((prev) => prev.map((t) => (t.id === id ? updatedTask : t)));
		} else {
			console.error('Failed to update task');
		}
	} catch (error) {
		console.error('Error updating task:', error);
	}
};

export const deleteTask = async (
	id: number,
	setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>,
): Promise<void> => {
	try {
		const response = await fetch(`http://localhost:5001/tasks/${id}`, {
			method: 'DELETE',
		});
		if (response.ok) {
			setTasks((prev) => prev.filter((task) => task.id !== id));
		} else {
			console.error('Failed to delete task');
		}
	} catch (error) {
		console.error('Error deleting task:', error);
	}
};

export const createTask = async (title: string, color: string) => {
	if (!title.trim()) {
		throw new Error('Title is required');
	}

	const response = await fetch('http://localhost:5001/tasks', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			title,
			color,
			completedStatus: false,
		}),
	});

	if (!response.ok) {
		throw new Error('Failed to create task.');
	}

	return response.json();
};
