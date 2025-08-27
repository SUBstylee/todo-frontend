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
	ariaLabel?: string;
	imgClassName?: string;
	btnClassName?: string;
	textContent: string;
	handleClick: () => void;
}

export interface TaskItemProps {
	task: TaskProps;
	toggleCompletion: (id: number) => void;
	deleteTask: (id: number) => void;
}
export interface TaskListProps {
	tasks: TaskProps[];
	toggleCompletion: (id: number) => void;
	deleteTask: (id: number) => void;
}

export interface TaskFormProps {
	title: string;
	setTitle: (title: string) => void;
	selectedColor: string;
	setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
	label: string;
	svgSrc: string;
	svgAlt: string;
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
