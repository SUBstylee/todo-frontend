'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import BackButton from '@/components/BackButton';
import Header from '@/components/Header';
import Input from '@/components/Input';
import AppButton from '@/components/AppButton';
import ColorCode from '@/components/ColorCode';
import Loading from '@/components/Loading';

import { fetchTaskById, saveTask } from '@/utils/api';

import copy from '@/data/copy.json';

const EditTaskPage = () => {
	const router = useRouter();
	const params = useParams();
	const taskId = Number(params.id);

	const [title, setTitle] = useState('');
	const [selectedColor, setSelectedColor] = useState<string>('#fff');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (isNaN(taskId)) {
			router.push('/');
			return;
		}

		const getTask = async () => {
			try {
				const task = await fetchTaskById(taskId);
				setTitle(task.title);
				setSelectedColor(task.color || '#fff');
			} catch (error) {
				console.error(error);
				router.push('/');
			} finally {
				setIsLoading(false);
			}
		};

		getTask();
	}, [taskId, router]);

	const handleSaveTask = async () => {
		if (!title.trim()) return alert('Title is required!');
		try {
			await saveTask(taskId, title, selectedColor);
			router.push('/');
		} catch (error) {
			console.error(error);
			alert('An error occurred while saving the task');
		}
	};

	return (
		<div
			className={
				'min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center'
			}>
			<Header />
			<main className={'w-full max-w-2xl flex flex-col  mt-12 px-4 sm:px-0'}>
				<BackButton />
				{isLoading ? (
					<Loading />
				) : (
					<>
						<Input
							title={title}
							setTitle={setTitle}
							label={copy.editPage.input.label}
							placeHolder={''}
						/>

						<ColorCode
							selectedColor={selectedColor}
							setSelectedColor={setSelectedColor}
						/>

						<AppButton
							textContent={copy.editPage.appButton.textContent}
							handleClick={handleSaveTask}
							imgSrc={'/checkmark.svg'}
							width={20}
							height={20}
							imgClassName={'inline-block'}
							btnClassName={'mt-8'}
						/>
					</>
				)}
			</main>
		</div>
	);
};

export default EditTaskPage;
