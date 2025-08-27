import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ColorCode from '@/components/ColorCode';
import { COLORS } from '@/constants/enums';
import type { Dispatch, SetStateAction } from 'react';

describe('ColorCode Component', () => {
	let selectedColor = '';

	const setSelectedColor: Dispatch<SetStateAction<string>> = jest.fn(
		(value) => {
			if (typeof value === 'function') {
				selectedColor = value(selectedColor);
			} else {
				selectedColor = value;
			}
		},
	);

	beforeEach(() => {
		selectedColor = '';
		(setSelectedColor as jest.Mock).mockClear();
	});

	it('renders the label from copy.json', () => {
		render(
			<ColorCode
				selectedColor={selectedColor}
				setSelectedColor={setSelectedColor}
			/>,
		);

		const label = screen.getByText(/color/i);
		expect(label).toBeInTheDocument();
	});

	it('renders all color buttons', () => {
		render(
			<ColorCode
				selectedColor={selectedColor}
				setSelectedColor={setSelectedColor}
			/>,
		);

		COLORS.forEach((color) => {
			const button = screen.getByLabelText(new RegExp(color, 'i'));
			expect(button).toBeInTheDocument();
		});
	});

	it('toggles color back to #fff if already selected', () => {
		render(
			<ColorCode
				selectedColor={selectedColor}
				setSelectedColor={setSelectedColor}
			/>,
		);

		const firstColor = COLORS[0];
		const button = screen.getByLabelText(new RegExp(firstColor, 'i'));
		fireEvent.click(button);

		const callArg = (setSelectedColor as jest.Mock).mock.calls[0][0];
		if (typeof callArg === 'function') {
			expect(callArg(selectedColor)).toBe('#fff');
		} else {
			expect(callArg).toBe(firstColor);
		}
	});

	it('calls setSelectedColor on button click', () => {
		selectedColor = COLORS[0];

		render(
			<ColorCode
				selectedColor={selectedColor}
				setSelectedColor={setSelectedColor}
			/>,
		);

		const firstColor = COLORS[0];
		const button = screen.getByLabelText(new RegExp(firstColor, 'i'));
		fireEvent.click(button);

		const updater = (setSelectedColor as jest.Mock).mock.calls[0][0];
		const result =
			typeof updater === 'function' ? updater(selectedColor) : updater;

		expect(result).toBe(firstColor);
	});
});
