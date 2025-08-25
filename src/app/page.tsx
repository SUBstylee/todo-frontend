'use client';
import { useState, useEffect } from 'react';
import { Task } from '../types/types';

import Header from '@/components/Header';
import ButtonCreateTask from '@/components/ButtonCreateTask';
import TaskCounter from '@/components/TaskCounter';

export default function Home() {
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		console.log('useEffect');
	}, []);
	return (
		<div className='min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center'>
			<Header />
			<div className='w-full max-w-2xl flex flex-col relative'>
				<ButtonCreateTask />
				<TaskCounter tasks={tasks} />
			</div>
		</div>
	);
}
