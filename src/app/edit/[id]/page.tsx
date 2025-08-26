'use client';

import BackButton from '@/components/BackButton';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

const page = () => {
	return (
		<div className='min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center'>
			<Header />
			<main className='w-full max-w-2xl flex flex-col items-center mt-12'>
				<BackButton />
			</main>
		</div>
	);
};

export default page;
