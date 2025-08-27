import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';
import { COLORS } from '@/constants/enums';

describe('TaskForm Component', () => {
	const mockHandleSubmit = jest.fn();
	const mockSetTitle = jest.fn();
	const mockSetSelectedColor = jest.fn();

	const defaultProps = {
		title: '',
		setTitle: mockSetTitle,
		selectedColor: '#fff',
		setSelectedColor: mockSetSelectedColor,
		handleSubmit: mockHandleSubmit,
		label: 'Task Title',
		svgSrc: '/icons/check.svg',
		svgAlt: 'Submit task',
		placeHolder: 'Enter task title',
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders Input, ColorCode, and AppButton', () => {
		render(<TaskForm {...defaultProps} />);

		expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();

		const colorLabel = screen.getByText('Color');
		expect(colorLabel).toBeInTheDocument();

		expect(
			screen.getByRole('button', { name: /add task/i }),
		).toBeInTheDocument();
	});

	it('calls handleSubmit when AppButton is clicked', () => {
		render(<TaskForm {...defaultProps} />);
		const button = screen.getByRole('button', {
			name: /add task/i,
		});
		fireEvent.click(button);
		expect(mockHandleSubmit).toHaveBeenCalled();
	});

	it('updates title when input changes', () => {
		render(<TaskForm {...defaultProps} />);
		const input = screen.getByPlaceholderText(defaultProps.placeHolder);
		fireEvent.change(input, { target: { value: 'New Task' } });
		expect(mockSetTitle).toHaveBeenCalledWith('New Task');
	});

	it('updates selectedColor when a color button is clicked', () => {
		render(<TaskForm {...defaultProps} />);

		COLORS.forEach((color) => {
			const colorButton = screen.getByLabelText(new RegExp(color, 'i'));
			fireEvent.click(colorButton);
			expect(mockSetSelectedColor).toHaveBeenCalled();
			const calledWith = mockSetSelectedColor.mock.calls.slice(-1)[0][0];
			const value =
				typeof calledWith === 'function' ? calledWith('#fff') : calledWith;
			expect(value).toBe(color);
		});
	});
});
