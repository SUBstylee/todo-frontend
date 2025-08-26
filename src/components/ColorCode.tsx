import { COLORS } from '@/constants/enums';
import { ColorCodeProps } from '@/types/types';

import copy from '@/data/copy.json';

const ColorCode = ({ selectedColor, setSelectedColor }: ColorCodeProps) => {
	return (
		<>
			<label
				style={{ color: '#4EA8DE' }}
				className={'text-lg font-medium text-left w-full mt-6 mb-2'}>
				{copy.colorCode.label}
			</label>
			<div className={'flex gap-4 justify-start'}>
				{COLORS.map((color) => (
					<button
						key={color}
						onClick={() =>
							setSelectedColor((prev) => (prev === color ? '#fff' : color))
						}
						style={{
							backgroundColor: color,
							border: selectedColor === color ? '2px solid white' : 'none',
						}}
						className={'w-10 h-10 rounded-full cursor-pointer'}></button>
				))}
			</div>
		</>
	);
};

export default ColorCode;
