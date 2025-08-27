import { InputProps } from '@/types/types';

const Input = ({ title, setTitle, label, placeHolder }: InputProps) => {
	return (
		<>
			<label
				htmlFor='task-input'
				style={{ color: '#4EA8DE' }}
				className={'text-lg font-medium text-left w-full mb-4'}>
				{label}
			</label>
			<input
				id='task-input'
				type={'text'}
				placeholder={placeHolder}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className={
					'w-full p-3 bg-black text-white border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-500'
				}
			/>
		</>
	);
};

export default Input;
