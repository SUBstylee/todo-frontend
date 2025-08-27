import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '@/components/Input';

describe('Input Component', () => {
	let title = '';
	const setTitle = jest.fn((value) => {
		title = value;
	});

	it('renders the label', () => {
		render(
			<Input
				title={title}
				setTitle={setTitle}
				label='Task Title'
				placeHolder='Enter task'
			/>,
		);

		const label = screen.getByText(/Task Title/i);
		expect(label).toBeInTheDocument();
	});

	it('renders the input with correct placeholder and value', () => {
		render(
			<Input
				title={title}
				setTitle={setTitle}
				label='Task Title'
				placeHolder='Enter task'
			/>,
		);

		const input = screen.getByPlaceholderText(
			/Enter task/i,
		) as HTMLInputElement;
		expect(input).toBeInTheDocument();
		expect(input.value).toBe(title);
	});

	it('calls setTitle on input change', () => {
		render(
			<Input
				title={title}
				setTitle={setTitle}
				label='Task Title'
				placeHolder='Enter task'
			/>,
		);

		const input = screen.getByPlaceholderText(
			/Enter task/i,
		) as HTMLInputElement;

		fireEvent.change(input, { target: { value: 'New Task' } });
		expect(setTitle).toHaveBeenCalledWith('New Task');
	});
});
