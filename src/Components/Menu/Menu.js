import React from 'react';
import menuHero from '../Assets/menudish-1-1500x900.jpg';
import { Appetizers, heroImages, indexList } from './MenuList';
import './Menu.css';
import { Link } from 'react-scroll';
export default function Menu() {
	return (
		<div>
			<div className='mx-auto relative  '>
				<img
					className='hero-menu-image opacity-75 h-auto mx-auto'
					src={menuHero}
					alt=''
				/>
				<h1 className='hero-menu-text text-center text-8xl font-bold bottom-10 absolute inset-x-0 top-96   '>
					Blue Iguana Food Menu
				</h1>
			</div>

			<div className='flex flex-row justify-center'>
				{heroImages.map((x) => {
					return <img className=' w-96  ' src={x} />;
				})}
			</div>
			<div className='flex md:justify-around mx-64 flex-wrap '>
				{indexList.map((x) => {
					return (
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							to={x}
							className='bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white text-center py-2 px-4 rounded '>
							{x}
						</Link>
					);
				})}
			</div>
			<h1
				id='Appetizers'
				className='text-center text-5xl font-bold mt-10 mb-10 text-yellow-500'>
				APPETIZERS
			</h1>

			<div className='p-10 grid grid-cols-2 gap-4 rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid '>
				{Appetizers.map((x) => {
					return (
						<div class='max-w-sm rounded overflow-hidden shadow-lg mx-auto'>
							<img class='w-full' src={x.image} alt='Mountain' />
							<div class='px-6 py-4'>
								<div class='font-bold text-xl mb-2'>Mountain</div>
								<p class='text-gray-700 text-base'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Voluptatibus quia, nulla! Maiores et perferendis eaque,
									exercitationem praesentium nihil.
								</p>
							</div>
							<div class='px-6 pt-4 pb-2'>
								<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									#photography
								</span>
								<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									#travel
								</span>
								<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
									#winter
								</span>
							</div>
						</div>

						// <div className=' w-22 lg:max-w-full lg:flex '>
						// 	<img
						// 		className='w-52 sm:w-32 sm:h-32 sm:ml-16 h-24 mt-10 md:ml-5 rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid shadow-lg'
						// 		src={x.image}
						// 		alt=''
						// 	/>
						// 	<div className=' lg:border-l-0 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
						// 		<div className='mb-8'>
						// 			<div className='text-gray-900 font-bold text-xl mb-2 md:text-center sm:text-center'>
						// 				{x.name}
						// 			</div>
						// 			<p className='text-gray-700 text-base md:text-center'>
						// 				{x.description}
						// 			</p>
						// 		</div>
						// 	</div>
						// </div>
					);
				})}
			</div>
		</div>
	);
}
