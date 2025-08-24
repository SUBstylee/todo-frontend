'use client';
import { useState, useEffect } from 'react';
import { Task } from '../types/types';

export default function Home() {
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		console.log('useEffect');
	}, []);
	return <div className='min-h-screen bg-[#1a1a1a] text-white'>page</div>;
}
