import { TaskProps } from '@/types/types';

export const mockTasks: TaskProps[] = [
	{
		id: 1,
		title: 'Buy groceries',
		completedStatus: false,
		color: '#2fc85c',
	},
	{
		id: 2,
		title: 'Finish TypeScript project',
		completedStatus: true,
		color: '#0c7aff',
	},
	{
		id: 3,
		title: 'Call mom',
		completedStatus: false,
		color: '#ff3c30',
	},
];
