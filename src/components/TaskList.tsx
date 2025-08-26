import Image from 'next/image';
import { TaskListProps } from '@/types/types';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }: TaskListProps) => {
	return (
		<div>
			{tasks.length ? (
				tasks.map((task) => <TaskItem key={task.id} />)
			) : (
				<div className='flex flex-col items-center text-center'>
					<hr className='w-full h-[15px] border-t border-solid border-gray-500 rounded-full mb-5' />
					<Image src='/clipboard.png' height={60} width={60} alt='Clipboard' />
					<p className='mt-6'>You don&apos;t have any tasks registered yet.</p>
					<p className='text-gray-500 mt-6'>
						Create tasks and organize your to-do items.
					</p>
				</div>
			)}
		</div>
	);
};

export default TaskList;
