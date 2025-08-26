import { TaskFormProps } from '@/types/types';
import AppButton from './AppButton';

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
			<label
				style={{ color: '#4EA8DE' }}
				className='text-lg font-medium text-left w-full mb-4'>
				{label}
			</label>
			<input
				type='text'
				placeholder={placeHolder}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className='w-full p-3 bg-black text-white border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-500'
			/>
			<div className='w-full max-w-2xl flex flex-col relative'>
				<AppButton
					textContent={'Add Task'}
					width={20}
					height={20}
					imgSrc={svgSrc}
					alt='Add Task Plus Icon'
					imgClassName='inline-block'
					btnClassName='mt-6'
				/>
			</div>
		</>
	);
};

export default TaskForm;
