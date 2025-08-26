import Image from 'next/image';
import { TaskListProps } from '@/types/types';
import TaskItem from './TaskItem';
import copy from '@/data/copy.json';

const TaskList = ({ tasks }: TaskListProps) => {
	return (
		<div className={'w-full max-w-2xl flex flex-col gap-4 mb-6'}>
			{tasks.length ? (
				tasks.map((task) => <TaskItem key={task.id} task={task} />)
			) : (
				<div className={'flex flex-col items-center text-center'}>
					<hr
						className={
							'w-full h-[15px] border-t border-solid border-gray-500 rounded-full mb-5'
						}
					/>
					<Image
						src={'/clipboard.png'}
						height={60}
						width={60}
						alt={copy.taskList.emptyStateAlt}
					/>
					<p className={'mt-6'}>{copy.taskList.emptyStateText}</p>
					<p className={'text-gray-500 mt-6'}>{copy.taskList.emptyStateHint}</p>
				</div>
			)}
		</div>
	);
};

export default TaskList;
