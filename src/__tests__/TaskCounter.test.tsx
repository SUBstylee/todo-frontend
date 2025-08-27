import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TaskCounter from '@/components/TaskCounter';
import copy from '@/data/copy.json';

describe('TaskCounter Component', () => {
	const tasksMock = [
		{ id: 1, title: 'Task 1', completedStatus: false },
		{ id: 2, title: 'Task 2', completedStatus: true },
		{ id: 3, title: 'Task 3', completedStatus: true },
	];
	const completedTasksMock = tasksMock.filter((t) => t.completedStatus);

	it('renders task and completed labels', () => {
		render(
			<TaskCounter tasks={tasksMock} completedTasks={completedTasksMock} />,
		);

		expect(screen.getByText(/Tasks:/i)).toBeInTheDocument();
		expect(screen.getByText(/Completed:/i)).toBeInTheDocument();
	});

	it('renders correct task counts', () => {
		render(
			<TaskCounter tasks={tasksMock} completedTasks={completedTasksMock} />,
		);

		expect(screen.getByText(tasksMock.length.toString())).toBeInTheDocument();

		const completedOfTotalText = copy.taskCounter.completedOfTotal
			.replace('{completed}', completedTasksMock.length.toString())
			.replace('{total}', tasksMock.length.toString());
		expect(screen.getByText(completedOfTotalText)).toBeInTheDocument();
	});

	it('renders 0 for completed when none completed', () => {
		render(<TaskCounter tasks={tasksMock} completedTasks={[]} />);

		expect(screen.getByText('0')).toBeInTheDocument();
	});
});
