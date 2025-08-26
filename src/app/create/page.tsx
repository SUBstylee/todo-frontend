'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import TaskForm from '@/components/TaskForm';

import { createTask } from '@/utils/api';

import copy from '@/data/copy.json';

const CreateTaskPage = () => {
	const [title, setTitle] = useState('');
	const [selectedColor, setSelectedColor] = useState<string>('#fff');
	const router = useRouter();

	const handleCreateTask = async () => {
		try {
			if (!title) {
				return alert('Title cannot be empty!');
			}
			await createTask(title, selectedColor);
			router.push('/');
		} catch (error) {
			console.error('Error creating task:', error);
			alert('An error occurred while creating the task.');
		}
	};

	return (
		<div
			className={
				'min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center'
			}>
			<Header />
			<main className={'w-full max-w-2xl flex flex-col mt-12 px-4 sm:px-0'}>
				<BackButton />
				<TaskForm
					title={title}
					setTitle={setTitle}
					selectedColor={selectedColor}
					setSelectedColor={setSelectedColor}
					label={copy.createPage.taskForm.label}
					svgSrc={'/addtask.svg'}
					svgAlt={copy.createPage.taskForm.svgAlt}
					placeHolder={copy.createPage.taskForm.placeholder}
					handleSubmit={handleCreateTask}
				/>
			</main>
		</div>
	);
};

export default CreateTaskPage;
