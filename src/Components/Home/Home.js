import React from 'react';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import { data } from './HomeData';
export default function Home() {
	return (
		<div className='container mx-auto px-28 '>
			<div className=' mx-auto'>
				<Hero />
			</div>

			<div className='container home-container -mt-24 relative  border-2  border-opacity-100 border-solid rounded-lg shadow-inner-2xl shadow-2xl  bg-white z-10 '>
				<h1 className='font-bold relative text-center text-3xl mt-10 mb-10'>
					Welcome to Blue Iguana!
				</h1>

				<div className='container relative md:mx-auto'>
					<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
						{data.map((x) => {
							return (
								<div className=''>
									<img className={x.styling} src={x.image} alt='' />
									<h2 className='text-center text-xl font-extrabold'>
										{x.title}
									</h2>
									<p className='text-center mx-10  md:text-2xl text-xl'>
										{x.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
