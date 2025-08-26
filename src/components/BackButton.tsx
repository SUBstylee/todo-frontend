import { useRouter } from 'next/navigation';
import Image from 'next/image';

const BackButton: React.FC = () => {
	const router = useRouter();
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
