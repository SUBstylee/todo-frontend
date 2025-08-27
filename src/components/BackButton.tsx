import { useRouter } from 'next/navigation';
import Image from 'next/image';

import copy from '@/data/copy.json';

const BackButton: React.FC = () => {
	const router = useRouter();
	const handleBackClick = () =>
		window.history.length > 1 ? router.back() : router.push('/');

	return (
		<button
			aria-label={copy.backButton.alt}
			onClick={handleBackClick}
			className={'self-start text-blue-500 mb-6 cursor-pointer'}>
			<Image
				src={'/arrow-left.svg'}
				height={14}
				width={14}
				alt={copy.backButton.alt}
			/>
		</button>
	);
};

export default BackButton;
