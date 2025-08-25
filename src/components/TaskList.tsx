import Image from 'next/image';

const TaskList = () => {
	return (
		<div className='flex flex-col items-center text-center'>
			<hr className='w-full h-[15px] border-t border-solid border-gray-500 rounded-full mb-5' />
			<Image src='/clipboard.png' height={60} width={60} alt='Clipboard' />
			<p className='text-lg font-medium mt-6'>
				You don’t have any tasks registered yet.
			</p>
			<p className='text-sm text-gray-500'>
				Create tasks and organize your to-do items.
			</p>
		</div>
	);
};

export default TaskList;
