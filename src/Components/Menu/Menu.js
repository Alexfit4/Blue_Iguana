import React from 'react';
import App from '../../App';
import { Appetizers } from './MenuList';
export default function Menu() {
	return (
		<div>
			<h1>APPETIZERS</h1>

			<div class='p-10 grid grid-cols-4 md:grid-cols-2 gap-2 rounded-lg border-2 mx-20'>
				{Appetizers.map((x) => {
					return (
						<div class=' w-22 lg:max-w-full lg:flex '>
							<img className='w-52 h-24 mt-10' src={x.image} alt='' />
							<div class=' lg:border-l-0 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
								<div class='mb-8'>
									<div class='text-gray-900 font-bold text-xl mb-2'>
										Best Mountain Trails 2020
									</div>
									<p class='text-gray-700 text-base'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Voluptatibus quia, nulla! Maiores et perferendis eaque,
										exercitationem praesentium nihil.
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
