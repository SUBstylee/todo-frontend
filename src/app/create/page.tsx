'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import TaskForm from '@/components/TaskForm';

const CreateTaskPage = () => {
	const [title, setTitle] = useState('');
	const [selectedColor, setSelectedColor] = useState<string>('#fff');
	const router = useRouter();

	return (
		<div className='min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center'>
			<Header />
			<main className='w-full max-w-2xl flex flex-col items-center mt-12'>
				<BackButton />
				<TaskForm
					title={title}
					setTitle={setTitle}
					selectedColor={selectedColor}
					setSelectedColor={setSelectedColor}
					label='Add Task'
					svgSrc='addtask.svg'
					placeHolder='Ex. Brush your teeth'
					handleSubmit={() => console.log('submitted, but not really')}
				/>
			</main>
		</div>
	);
};

export default CreateTaskPage;
