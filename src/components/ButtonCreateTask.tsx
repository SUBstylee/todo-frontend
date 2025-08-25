import Link from 'next/link';
import Image from 'next/image';

const ButtonCreateTask = () => {
	return (
		<div className='w-full max-w-2xl flex flex-col relative'>
			<Link href='/create'>
				<button className='w-full bg-blue-500 text-white rounded-md hover:bg-blue-400 px-6 py-3 transition flex items-center justify-center gap-2 -mt-6'>
					<span>Create Task</span>
					<Image
						src='/addtask.svg'
						alt='Create Task Plus Icon'
						width={20}
						height={20}
						className='inline-block'
					/>
				</button>
			</Link>
		</div>
	);
};

export default ButtonCreateTask;
