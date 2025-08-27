import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '@/components/TaskItem';
import { TaskProps } from '@/types/types';
import copy from '@/data/copy.json';

describe('TaskItem Component', () => {
	const mockToggleCompletion = jest.fn();
	const mockDeleteTask = jest.fn();

	const task: TaskProps = {
		id: 1,
		title: 'Task 1',
		color: '#FF3C30',
		completedStatus: false,
	};

	beforeEach(() => {
		jest.clearAllMocks();
		render(
			<TaskItem
				task={task}
				toggleCompletion={mockToggleCompletion}
				deleteTask={mockDeleteTask}
			/>,
		);
	});

	it('renders task title', () => {
		const titleLink = screen.getByText(task.title);
		expect(titleLink).toBeInTheDocument();
	});

	it('calls toggleCompletion when checkbox is clicked', () => {
		const checkbox = screen.getByLabelText(
			`${copy.taskItem.inputAria} ${task.title}`,
		);
		fireEvent.click(checkbox);
		expect(mockToggleCompletion).toHaveBeenCalledWith(task.id);
	});

	it('calls deleteTask when delete button is clicked', () => {
		const deleteButton = screen.getByLabelText(
			`${copy.taskItem.deleteAria} ${task.title}`,
		);
		fireEvent.click(deleteButton);
		expect(mockDeleteTask).toHaveBeenCalledWith(task.id);
	});

	it('shows checkmark SVG if task is completed', () => {
		render(
			<TaskItem
				task={{ ...task, completedStatus: true }}
				toggleCompletion={mockToggleCompletion}
				deleteTask={mockDeleteTask}
			/>,
		);
		const checkmark = screen.getByTestId('checkmark');
		expect(checkmark).toBeInTheDocument();
	});
});
