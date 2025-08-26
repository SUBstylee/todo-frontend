'use client';
import { useState, useEffect } from 'react';
import { TaskProps } from '../types/types';

import Header from '@/components/Header';
import AppButton from '@/components/AppButton';
import TaskCounter from '@/components/TaskCounter';
import TaskList from '@/components/TaskList';

import { mockTasks } from '@/constants/stub';

export default function Home() {
	const [tasks, setTasks] = useState<TaskProps[]>(mockTasks);
	const completedTasks = tasks.filter((task) => task.completedStatus);

	useEffect(() => {
		console.log('useEffect');
	}, []);
	return (
		<div className='min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center'>
			<Header />
			<div className='w-full max-w-2xl flex flex-col relative'>
				<AppButton
					textContent={'Create Task'}
					width={20}
					height={20}
					imgSrc='/addtask.svg'
					alt='Create Task Plus Icon'
					imgClassName='inline-block'
					btnClassName='-mt-6'
				/>
				<TaskCounter tasks={tasks} completedTasks={completedTasks} />
			</div>
			<main className='w-full max-w-2xl mt-6'>
				<TaskList tasks={tasks} />
			</main>
		</div>
	);
}
