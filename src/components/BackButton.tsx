import { useRouter } from 'next/navigation';
import Image from 'next/image';

const BackButton: React.FC = () => {
	const router = useRouter();
	// decided to go with this check for scalability. as the app grows, might not want to always bring them back to root. could also later add a prop to go somewhere specific and adjust the logic here.
	const handleBackClick = () =>
		window.history.length > 1 ? router.back() : router.push('/');

	return (
		<button
			onClick={handleBackClick}
			className='self-start text-blue-500 mb-6 cursor-pointer'>
			<Image src='arrow-left.svg' height={14} width={14} alt='Go Back' />
		</button>
	);
};

export default BackButton;
