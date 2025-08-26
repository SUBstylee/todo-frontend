import { TaskFormProps } from '@/types/types';
import AppButton from './AppButton';
import Input from './Input';
import ColorCode from './ColorCode';

const TaskForm = ({
	title,
	setTitle,
	selectedColor,
	setSelectedColor,
	handleSubmit,
	label,
	svgSrc,
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
				textContent={'Add Task'}
				width={20}
				height={20}
				imgSrc={svgSrc}
				alt='Add Task Plus Icon'
				imgClassName='inline-block'
				btnClassName='mt-8'
			/>
		</>
	);
};

export default TaskForm;
