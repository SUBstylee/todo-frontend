import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '@/components/TaskList';
import { TaskProps } from '@/types/types';
import copy from '@/data/copy.json';

describe('TaskList Component', () => {
	const mockToggleCompletion = jest.fn();
	const mockDeleteTask = jest.fn();

	const tasks: TaskProps[] = [
		{ id: 1, title: 'Task 1', color: '#ff3c30', completedStatus: false },
		{ id: 2, title: 'Task 2', color: '#ff9502', completedStatus: true },
	];

	it('renders a list of tasks', () => {
		render(
			<TaskList
				tasks={tasks}
				toggleCompletion={mockToggleCompletion}
				deleteTask={mockDeleteTask}
			/>,
		);

		tasks.forEach((task) => {
			expect(screen.getByText(task.title)).toBeInTheDocument();
		});
	});

	it('calls toggleCompletion and deleteTask when TaskItem buttons are clicked', () => {
		render(
			<TaskList
				tasks={tasks}
				toggleCompletion={mockToggleCompletion}
				deleteTask={mockDeleteTask}
			/>,
		);

		const firstToggleButton = screen.getByLabelText(
			`Toggle completion for ${tasks[0].title}`,
		);
		fireEvent.click(firstToggleButton);
		expect(mockToggleCompletion).toHaveBeenCalledWith(tasks[0].id);

		const firstDeleteButton = screen.getByLabelText(`Delete ${tasks[0].title}`);
		fireEvent.click(firstDeleteButton);
		expect(mockDeleteTask).toHaveBeenCalledWith(tasks[0].id);
	});

	it('renders empty state when no tasks exist', () => {
		render(
			<TaskList
				tasks={[]}
				toggleCompletion={mockToggleCompletion}
				deleteTask={mockDeleteTask}
			/>,
		);

		expect(
			screen.getByAltText(copy.taskList.emptyStateAlt),
		).toBeInTheDocument();
		expect(screen.getByText(copy.taskList.emptyStateText)).toBeInTheDocument();
		expect(screen.getByText(copy.taskList.emptyStateHint)).toBeInTheDocument();
	});
});
