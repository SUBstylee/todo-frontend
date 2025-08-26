'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import TaskForm from '@/components/TaskForm';

const CreateTaskPage = () => {
	return (
		<div className='min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center'>
			<Header />
			<main className='w-full max-w-2xl flex flex-col items-center mt-12'>
				<BackButton />
				<TaskForm />
			</main>
		</div>
	);
};

export default CreateTaskPage;
