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

export interface ButtonProps {
	width?: number;
	height?: number;
	imgSrc?: string;
	alt?: string;
	imgClassName?: string;
	btnClassName?: string;
	textContent: string;
	handleClick: () => void;
}

export interface TaskItemProps {
	task: TaskProps;
}
export interface TaskListProps {
	tasks: TaskProps[];
}

export interface TaskFormProps {
	title: string;
	setTitle: (title: string) => void;
	selectedColor: string;
	setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
	label: string;
	svgSrc: string;
	placeHolder: string;
	handleSubmit: () => void;
}

export interface InputProps {
	title: string;
	setTitle: (title: string) => void;
	label: string;
	placeHolder: string;
}

export interface ColorCodeProps {
	selectedColor: string;
	setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}
