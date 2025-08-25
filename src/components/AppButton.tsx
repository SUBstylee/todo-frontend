import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../types/types';

const AppButton = ({
	imgSrc,
	alt,
	width,
	height,
	className,
	textContent,
}: Button) => {
	return (
		<Link href='/create'>
			<button className='w-full bg-blue-500 text-white cursor-pointer rounded-md hover:bg-blue-600 px-6 py-3 transition flex items-center justify-center gap-2 -mt-6'>
				<span>{textContent}</span>
				{imgSrc && (
					<Image
						src={imgSrc}
						alt={alt || ''}
						width={width}
						height={height}
						className={className}
					/>
				)}
			</button>
		</Link>
	);
};

export default AppButton;
