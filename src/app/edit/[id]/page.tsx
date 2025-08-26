'use client';
import { useState } from 'react';

import BackButton from '@/components/BackButton';
import Header from '@/components/Header';
import Input from '@/components/Input';
import AppButton from '@/components/AppButton';
import ColorCode from '@/components/ColorCode';

import copy from '@/data/copy.json';

const EditTaskPage = () => {
	const [title, setTitle] = useState('');
	const [selectedColor, setSelectedColor] = useState<string>('#fff');

	return (
		<div
			className={
				'min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center'
			}>
			<Header />
			<main className={'w-full max-w-2xl flex flex-col  mt-12 px-4 sm:px-0'}>
				<BackButton />
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
					handleClick={() => console.log('saved, but not really')}
					imgSrc={'/checkmark.svg'}
					width={20}
					height={20}
					imgClassName={'inline-block'}
					btnClassName={'mt-8'}
				/>
			</main>
		</div>
	);
};

export default EditTaskPage;
