import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppButton from '../components/AppButton';

describe('AppButton', () => {
	it('renders the button text', () => {
		render(<AppButton textContent='Click Me' handleClick={() => {}} />);
		expect(screen.getByText('Click Me')).toBeInTheDocument();
	});

	it('calls handleClick when clicked', () => {
		const handleClick = jest.fn();
		render(<AppButton textContent='Click Me' handleClick={handleClick} />);
		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('renders an image when imgSrc is provided', () => {
		render(
			<AppButton
				textContent='With Image'
				imgSrc='/rocket.svg'
				alt='rocket'
				width={24}
				height={24}
				handleClick={() => {}}
			/>,
		);
		const img = screen.getByAltText('rocket');
		expect(img).toBeInTheDocument();
	});

	it('does not render an image if imgSrc is empty', () => {
		render(<AppButton textContent='No Image' handleClick={() => {}} />);
		const img = screen.queryByRole('img');
		expect(img).toBeNull();
	});
});
