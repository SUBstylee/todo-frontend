export interface Task {
	id: number;
	title: string;
	completedStatus: boolean;
	color?: string;
}

export interface TaskCounterProps {
	tasks: Task[];
}
