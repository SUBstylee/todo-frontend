import Image from 'next/image';
import { ButtonProps } from '../types/types';

const AppButton = ({
	imgSrc = '',
	alt = '',
	ariaLabel = '',
	width,
	height,
	imgClassName = '',
	btnClassName = '',
	textContent,
	handleClick = () => {},
}: ButtonProps) => {
	const showImg = imgSrc && (height || width);

	return (
		<button
			onClick={handleClick}
			className={`w-full bg-blue-500 text-white cursor-pointer rounded-md hover:bg-blue-600 px-6 py-3 transition flex items-center justify-center gap-2 ${btnClassName}`}>
			<span>{textContent}</span>
			{showImg && (
				<Image
					src={imgSrc}
					alt={alt}
					aria-label={ariaLabel}
					width={width}
					height={height}
					className={imgClassName}
				/>
			)}
		</button>
	);
};

export default AppButton;
