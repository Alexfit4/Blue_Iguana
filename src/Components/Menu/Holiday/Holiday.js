import React from 'react';
import '../Menu.css';
import {mothersBrunch} from '../MenuList'
import {
	Card,
	CardRow,
	CardStatus,
	CardBody,
	Paragraph,
	CardImage,
} from '@material-tailwind/react/';
import H6 from '@material-tailwind/react/Heading6';
export default function Holiday() {
	return (
		<div className='container mx-auto  md:px-28'>
			<div className='relative h-96 m-8 -mt-16 overflow-hidden rounded-lg bg-indigo-500 container mx-auto'>
				<div className='absolute z-30  flex w-5/6  hero-menu-text2 '>
					<div className='relative z-30 w-5/6 px-6 py-8   text-white md:py-10 md:w-1/2 '>
						<h2 className='text-7xl  hero-menu-text  mt-32 '>
							Blue Iguana Holiday Menu
						</h2>
					</div>
					<div className='absolute top-0 right-0 flex w-full h-full'>
						<div className='w-1/3 h-full bg-indigo-500'></div>
						<div className='relative w-1/3'>
							<svg
								fill='currentColor'
								viewBox='0 0 100 100'
								className='absolute inset-y-0 z-20 h-full text-indigo-500'>
								<polygon
									id='diagonal'
									points='0,0 100,0 50,100 0,100'></polygon>
							</svg>
							<svg
								fill='currentColor'
								viewBox='0 0 100 100'
								className='absolute inset-y-0 z-10 h-full ml-6 text-yellow-700 '>
								<polygon points='0,0 100,0 50,100 0,100'></polygon>
							</svg>
						</div>
					</div>
				</div>
				<div className='absolute top-0 right-0 block w-9/12 h-screen bg-indigo-400'></div>
			</div>
			<div className='container -mt-20 md:mx-auto h-auto relative border-2 h-screen  border-opacity-100 border-solid rounded-t-lg shadow-inner-2xl shadow-2xl  bg-white '>
				<div className='container mx-auto sm:px-24 mt-10 text-center '>
					<h2>MOTHER'S AND EASTER BRUNCH MENU</h2>
					<p className='font-bold'>Holiday brunch $29.95</p>
					<p className='font-bold'>$ 12.95 for kids under 12</p>
					<p className='font-bold'>Kids under 4 eat free</p>
					<p className='font-bold'>10:00am - 3:30pm</p>
				</div>

				<div className=' p-10 grid lg:grid-cols-2 gap-4 md:grid-col-1  md:rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid bg-white '>
					{mothersBrunch.map((x) => {
						return (
							<div className='container flex flex-wrap mx-auto mt-10 '>
								<Card className='bg-gray-200'>
									<CardRow>
										<CardBody>
											<H6 color='gray'>{x.name}</H6>
											<Paragraph color='gray'>{x.description}</Paragraph>
										</CardBody>
									</CardRow>
								</Card>
							</div>
						);
					})}
				</div>

				<h1 className="text-center">Reservations are limited Call us today! (703)-502-8108</h1>
			</div>
		</div>
	);
}
