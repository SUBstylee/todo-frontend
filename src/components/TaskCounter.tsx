import React from 'react';
import { TaskCounterProps } from '../types/types';
import copy from '../data/copy.json';

const TaskCounter = ({ tasks, completedTasks }: TaskCounterProps) => {
	return (
		<div className={'flex justify-between w-full mt-14 text-gray-400'}>
			<div style={{ color: '#4EA8DE' }}>
				{copy.taskCounter.tasksLabel}
				<span
					className={
						'bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'
					}>
					{tasks.length}
				</span>
			</div>
			<div style={{ color: '#5E60CE' }}>
				{copy.taskCounter.completedLabel}
				<span
					className={
						'bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'
					}>
					{completedTasks.length
						? copy.taskCounter.completedOfTotal
								.replace('{completed}', completedTasks.length.toString())
								.replace('{total}', tasks.length.toString())
						: completedTasks.length}
				</span>
			</div>
		</div>
	);
};

export default TaskCounter;
