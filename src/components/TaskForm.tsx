import { TaskFormProps } from '@/types/types';
import AppButton from './AppButton';
import Input from './Input';
import ColorCode from './ColorCode';

import copy from '@/data/copy.json';

const TaskForm = ({
	title,
	setTitle,
	selectedColor,
	setSelectedColor,
	handleSubmit,
	label,
	svgSrc,
	svgAlt,
	placeHolder,
}: TaskFormProps) => {
	return (
		<>
			<Input
				title={title}
				setTitle={setTitle}
				label={label}
				placeHolder={placeHolder}
			/>
			<ColorCode
				selectedColor={selectedColor}
				setSelectedColor={setSelectedColor}
			/>
			<AppButton
				handleClick={handleSubmit}
				textContent={copy.taskForm.appButton.textContent}
				width={20}
				height={20}
				imgSrc={svgSrc}
				alt={svgAlt}
				imgClassName={'inline-block'}
				btnClassName={'mt-8'}
			/>
		</>
	);
};

export default TaskForm;
