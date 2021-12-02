import React from 'react';
import {
	happyHourFood,
	hhdrinks,
	wednesdaySpecials,
	meatMondays,
	sundayBrunch,
} from '../MenuList';
import {
	Card,
	CardRow,
	CardStatus,
	CardBody,
	Paragraph,
	CardImage,
} from '@material-tailwind/react/';
import H6 from '@material-tailwind/react/Heading6';
import '../Menu.css';
export default function Weekly() {
	return (
		<div className='container mx-auto  md:px-28'>
			<div className='relative h-96 m-8 -mt-16 overflow-hidden rounded-lg bg-indigo-500 container mx-auto'>
				<div className='absolute z-30  flex w-5/6 h-54 '>
					<div className='relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2 '>
						<h2 className='text-7xl  hero-menu-text  mt-32'>
							Blue Iguana Weekly Specials
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
				<div className='container mx-auto sm:px-24 mt-10 '>
					<p className='about-us-p text-center'>
						Drinks specials all day until 8pm every day of the week! Even
						weekends!
					</p>
				</div>

				<div className='md:container md:mx-auto md:px-24 mt-10 mb-20'>
					<h1 className='text-center text-4xl text-indigo-700'>
						Happy Hour All Day Until 8pm!
					</h1>
				</div>

				<div className=' p-10 grid lg:grid-cols-2 gap-4 md:grid-col-1  md:rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid bg-white '>
					{happyHourFood.map((x) => {
						return (
							<div className='container flex flex-wrap mx-auto mt-10 '>
								<Card className='bg-gray-200'>
									<CardRow>
										<CardImage
											src={x.image}
											className='md:w-28 w-28'
											alt='Card Image'
										/>

										<CardBody>
											<H6 color='gray'>{x.name}</H6>
										</CardBody>
										<CardStatus amount={x.price} />
									</CardRow>
								</Card>
							</div>
						);
					})}
				</div>

				<h1 className='text-center text-5xl font-bold mt-10 mb-10 text-indigo-700'>
					HAPPY HOUR DRINKS
				</h1>

				<div className=' p-10 grid lg:grid-cols-2 gap-4 md:grid-col-1  md:rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid bg-white '>
					{hhdrinks.map((x) => {
						return (
							<div className='container flex flex-wrap mx-auto mt-10 '>
								<Card className='bg-gray-200'>
									<CardRow>
										<CardBody>
											<H6 color='gray'>{x.name}</H6>
											<Paragraph color='gray'>{x.description}</Paragraph>
										</CardBody>

										<CardStatus amount={x.price} />
									</CardRow>
								</Card>
							</div>
						);
					})}
				</div>

				<h1 className='text-center text-5xl font-bold mt-10 mb-10 text-indigo-700'>
					WEDNESDAY SEAFOOD SPECIAL
				</h1>
				<div className='text-center'>
					<p>FROM 4PM-10PM</p>
					<p className='font-bold'>Save $2 and make it a combo for $18.98!</p>
					<p>Combo not for sharing</p>
					<p>Not to go</p>
					<p>Not to take out</p>
				</div>

				<div className=' p-10 grid lg:grid-cols-2 gap-4 md:grid-col-1  md:rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid bg-white '>
					{wednesdaySpecials.map((x) => {
						return (
							<div className='container flex flex-wrap mx-auto mt-10 '>
								<Card className='bg-gray-200'>
									<CardRow>
										<CardImage
											src={x.image}
											className='md:w-28 w-28'
											alt='Card Image'
										/>

										<CardStatus amount={x.price} />
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

				<h1 className='text-center text-5xl font-bold mt-10 mb-10 text-indigo-700'>
					MEAT MONDAY
				</h1>

				<div className=' p-10 grid lg:grid-cols-2 gap-4 md:grid-col-1  md:rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid bg-white '>
					{meatMondays.map((x) => {
						return (
							<div className='container flex flex-wrap mx-auto mt-10 '>
								<Card className='bg-gray-200'>
									<CardRow>
										<CardBody>
											<H6 color='gray'>{x.name}</H6>
											<Paragraph color='gray'>{x.description}</Paragraph>
										</CardBody>

										<CardStatus amount={x.price} />
									</CardRow>
								</Card>
							</div>
						);
					})}
				</div>

				<h1 className='text-center text-5xl font-bold mt-10 mb-10 text-indigo-700'>
					SUNDAY BRUNCH
				</h1>

				<div className='text-center'>
					<p>$13.95 per Person</p>
					<p>From 10:00am to 2:00pm</p>
					<p className='font-bold'>
						ADD: You can order:Alaskan Snow Crab Legs / Wild Caught Peel & Eat
						Shrimp *Market Price
					</p>
				</div>

				<div className=' p-10 grid lg:grid-cols-2 gap-4 md:grid-col-1  md:rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid bg-white '>
					{sundayBrunch.map((x) => {
						return (
							<div className='container flex flex-wrap mx-auto mt-10 '>
								<Card className='bg-gray-200'>
									<CardRow>
										<CardBody>
											<H6 color='gray'>{x.name}</H6>
											<Paragraph color='gray'>{x.description}</Paragraph>
										</CardBody>

										<CardStatus amount={x.price} />
									</CardRow>
								</Card>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
