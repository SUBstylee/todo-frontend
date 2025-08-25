export interface Task {
	id: number;
	title: string;
	completedStatus: boolean;
	color?: string;
}

export interface TaskCounterProps {
	tasks: Task[];
}

export interface Button {
	width?: number;
	height?: number;
	imgSrc?: string;
	alt?: string;
	className?: string;
	textContent: string;
}
