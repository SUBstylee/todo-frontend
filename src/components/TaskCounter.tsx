import React from 'react';
import { Task } from '../types/types';

type Props = {
	tasks: Task[];
};

const TaskCounter = ({ tasks }: Props) => {
	return (
		<div className='flex justify-between w-full mt-14 text-gray-400'>
			<div style={{ color: '#4EA8DE' }}>
				Tasks:{' '}
				<span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'>
					{tasks.length}
				</span>
			</div>
			<div style={{ color: '#5E60CE' }}>
				Completed:{' '}
				<span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'>
					{tasks.length}
				</span>
			</div>
		</div>
	);
};

export default TaskCounter;
