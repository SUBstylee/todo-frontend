'use client';
import { useState, useEffect } from 'react';
import { TaskProps } from '../types/types';
import { useRouter } from 'next/navigation';

import Header from '@/components/Header';
import AppButton from '@/components/AppButton';
import TaskCounter from '@/components/TaskCounter';
import TaskList from '@/components/TaskList';
import Loading from '@/components/Loading';

import { fetchTasks, toggleCompletion, deleteTask } from '@/utils/api';

import copy from '@/data/copy.json';

const Home = () => {
	const [tasks, setTasks] = useState<TaskProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const completedTasks = tasks.filter((task) => task.completedStatus);
	const router = useRouter();

	useEffect(() => {
		const getTasks = async () => {
			try {
				const data = await fetchTasks();
				setTasks(data);
			} catch (error) {
				console.error('Error fetching tasks:', error);
			} finally {
				setIsLoading(false);
			}
		};
		getTasks();
	}, []);

	return (
		<div
			className={
				'min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center'
			}>
			<Header />
			<div className={'w-full max-w-2xl flex flex-col relative px-4 sm:px-0'}>
				<AppButton
					handleClick={() => router.push('/create')}
					textContent={copy.homePage.createTaskButton.text}
					width={20}
					height={20}
					imgSrc={'/addtask.svg'}
					alt={copy.homePage.createTaskButton.alt}
					ariaLabel={copy.homePage.createTaskButton.text}
					imgClassName={'inline-block'}
					btnClassName={'-mt-6'}
				/>
				<TaskCounter tasks={tasks} completedTasks={completedTasks} />
			</div>
			<main className={'w-full max-w-2xl mt-6'}>
				{isLoading ? (
					<div role='status' aria-live='polite'>
						<Loading />
					</div>
				) : (
					<TaskList
						tasks={tasks}
						toggleCompletion={(id) => toggleCompletion(id, tasks, setTasks)}
						deleteTask={(id) => deleteTask(id, setTasks)}
					/>
				)}
			</main>
		</div>
	);
};

export default Home;
