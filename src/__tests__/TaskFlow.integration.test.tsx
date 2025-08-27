import '@testing-library/jest-dom';
import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import { TaskItemProps } from '@/types/types';
import { COLORS } from '@/constants/enums';
import copy from '@/data/copy.json';

describe('Task Flow Integration (UI + State + Color)', () => {
	const initialTasks: TaskItemProps['task'][] = [
		{ id: 1, title: 'Task 1', color: '#FF3C30', completedStatus: false },
		{ id: 2, title: 'Task 2', color: '#0C7AFF', completedStatus: false },
	];

	const AppWrapper = () => {
		const [tasks, setTasks] = useState(initialTasks);
		const [selectedColor, setSelectedColor] = useState('#FF3C30');
		const [title, setTitle] = useState('');

		const addTask = (title: string, color: string) => {
			const newTask = {
				id: tasks.length + 1,
				title,
				color,
				completedStatus: false,
			};
			setTasks((prev) => [...prev, newTask]);
		};

		const toggleCompletion = (id: number) => {
			setTasks((prev) =>
				prev.map((t) =>
					t.id === id ? { ...t, completedStatus: !t.completedStatus } : t,
				),
			);
		};

		const deleteTask = (id: number) => {
			setTasks((prev) => prev.filter((t) => t.id !== id));
		};

		return (
			<>
				<TaskForm
					title={title}
					setTitle={setTitle}
					selectedColor={selectedColor}
					setSelectedColor={setSelectedColor}
					handleSubmit={() => {
						if (!title.trim()) return;
						addTask(title, selectedColor);
						setTitle('');
					}}
					label={''}
					svgSrc={''}
					svgAlt={''}
					placeHolder={''}
				/>
				<TaskList
					tasks={tasks}
					toggleCompletion={toggleCompletion}
					deleteTask={deleteTask}
				/>
			</>
		);
	};

	it('renders initial tasks', () => {
		render(<AppWrapper />);
		expect(screen.getByText('Task 1')).toBeInTheDocument();
		expect(screen.getByText('Task 2')).toBeInTheDocument();
	});

	it('adds a new task with the selected color', () => {
		render(<AppWrapper />);
		const addButton = screen.getByRole('button', {
			name: new RegExp(copy.taskForm.appButton.textContent, 'i'),
		});

		const thirdColor = COLORS[2];
		const colorButton = screen.getByLabelText(new RegExp(thirdColor, 'i'));
		fireEvent.click(colorButton);

		const textbox = screen.getByRole('textbox');
		fireEvent.change(textbox, {
			target: { value: 'New Color Task' },
		});
		fireEvent.click(addButton);

		const newTask = screen.getByText('New Color Task');
		expect(newTask).toBeInTheDocument();

		const newTaskCheckbox = screen.getByLabelText(
			new RegExp(`toggle completion for new color task`, 'i'),
		);
		expect(newTaskCheckbox).toBeInTheDocument();
	});

	it('toggles task completion', () => {
		render(<AppWrapper />);
		const task1Checkbox = screen.getByLabelText(
			new RegExp(`toggle completion for task 1`, 'i'),
		);
		fireEvent.click(task1Checkbox);

		const task1TitleSpan = screen.getByText('Task 1').closest('span');
		expect(task1TitleSpan).toHaveClass('line-through');
	});

	it('deletes a task', () => {
		render(<AppWrapper />);
		const deleteButton = screen.getByLabelText(
			new RegExp(`delete task 1`, 'i'),
		);
		fireEvent.click(deleteButton);

		expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
	});
});
