import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import BackButton from '../components/BackButton';
import copy from '@/data/copy.json';

jest.mock('next/navigation', () => ({
	useRouter: jest.fn(),
}));

describe('BackButton', () => {
	const pushMock = jest.fn();
	const backMock = jest.fn();

	beforeEach(() => {
		(useRouter as jest.Mock).mockReturnValue({
			back: backMock,
			push: pushMock,
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('renders with the correct aria-label', () => {
		render(<BackButton />);
		const button = screen.getByRole('button', { name: copy.backButton.alt });
		expect(button).toBeInTheDocument();
	});

	it('calls router.back() when window.history.length > 1', () => {
		Object.defineProperty(window, 'history', {
			value: { length: 2 },
			writable: true,
		});

		render(<BackButton />);
		const button = screen.getByRole('button', { name: copy.backButton.alt });
		fireEvent.click(button);
		expect(backMock).toHaveBeenCalled();
		expect(pushMock).not.toHaveBeenCalled();
	});

	it('calls router.push("/") when window.history.length <= 1', () => {
		Object.defineProperty(window, 'history', {
			value: { length: 1 },
			writable: true,
		});

		render(<BackButton />);
		const button = screen.getByRole('button', { name: copy.backButton.alt });
		fireEvent.click(button);
		expect(pushMock).toHaveBeenCalledWith('/');
		expect(backMock).not.toHaveBeenCalled();
	});
});
