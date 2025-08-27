import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loading from '../components/Loading';

describe('Loading Component', () => {
	it('renders the loading spinner and accessible text', () => {
		render(<Loading />);

		const statusDiv = screen.getByRole('status');
		expect(statusDiv).toBeInTheDocument();

		const srText = screen.getByText(/loading/i);
		expect(srText).toBeInTheDocument();

		const svg = statusDiv.querySelector('svg');
		expect(svg).toBeInTheDocument();
	});
});
