import { TaskProps } from '../types/types';

export const fetchTasks = async (): Promise<TaskProps[]> => {
	const response = await fetch('http://localhost:5001/tasks');
	if (!response.ok) {
		throw new Error('Failed to fetch tasks');
	}
	return response.json();
};
