import { TaskProps } from '@/types/types';

export const mockTasks: TaskProps[] = [
	{
		id: 1,
		title: 'Buy groceries',
		completedStatus: false,
		color: 'green',
	},
	{
		id: 2,
		title: 'Finish TypeScript project',
		completedStatus: true,
		color: 'blue',
	},
	{
		id: 3,
		title: 'Call mom',
		completedStatus: false,
		color: 'red',
	},
];
