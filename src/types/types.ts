export interface TaskProps {
	id: number;
	title: string;
	completedStatus: boolean;
	color?: string;
}

export interface TaskCounterProps {
	tasks: TaskProps[];
	completedTasks: TaskProps[];
}

export interface Button {
	width?: number;
	height?: number;
	imgSrc?: string;
	alt?: string;
	className?: string;
	textContent: string;
}

export interface TaskItemProps {
	task: TaskProps;
}
export interface TaskListProps {
	tasks: TaskProps[];
}
