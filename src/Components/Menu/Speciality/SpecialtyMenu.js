import React from 'react';

export default function SpecialtyMenu() {
	return (
		<div className='container mx-auto  md:px-28'>
			<div className='relative h-96 m-8 -mt-16 overflow-hidden rounded-lg bg-indigo-500 container mx-auto'>
				<div className='absolute z-30  flex w-5/6 h-54 '>
					<div className='relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2'>
						<h2 className='text-7xl  hero-menu-text  mt-32'>
							Blue Iguana Specialty Menu
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
			<div className='container -mt-20 mx-auto h-auto relative border-2 h-screen  border-opacity-100 border-solid rounded-t-lg shadow-inner-2xl shadow-2xl  bg-white '>
				<div className='container mx-auto sm:px-24 mt-10 '>
					<p className='about-us-p text-center'>
						Blue Iguana’s famous night life 7 days a week. From Dj’s to poker.
						There’s always something happening late night at “The Iggy”
					</p>
				</div>

				<div className='container mx-auto sm:px-24 mt-10 mb-20'>
					<h1 className='text-center text-4xl text-indigo-700'>
						Happy Hour All Day Until 8pm!
					</h1>
				</div>

				<div className='container mx-22 px-32 grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-4'>
					<div className='border-solid border-2  border-gray-300 rounded-lg shadow-2xl'>
						<h1 className=' text-2xl mb-8 text-center'>Monday</h1>

						<h1 className='ml-4 text-2xl mt-10 mb-5 text-center'>
							Monday Night Poker
						</h1>
						<p className='text-center mx-5'>
							World Tavern Poker, America’s number 1 bar poker league.Free!
							Every Monday at 7pm & 9:00pm NFL Monday Night Football. Acustic
							music every other Monday
						</p>
					</div>
					<div className='border-solid border-2  border-gray-300 rounded-lg shadow-2xl'>
						<h1 className=' text-2xl mb-8 text-center'>Tuesday</h1>

						<h1 className='text-center text-2xl mt-10 mb-6'>
							Service Industry Night
						</h1>
						<p className='mb-10 text-center mx-5'>
							Russell, AKA DJ LUV spins all night. Special discounts for
							industry Friends!
						</p>
						<p className='mb-5 mx-5 text-center'>
							Every Tueday From 10pm until close Tequila Tuesday after 10pm!
						</p>
					</div>
					<div className='border-solid border-2  border-gray-300 rounded-lg shadow-2xl pb-10'>
						<h1 className='text-center text-2xl mb-8 mt-10'>Wednesday</h1>

						<h1 className='text-center text-2xl mb-4'>The Big Travis Show</h1>
						<p className='mb-10 text-center'>
							Big Travis taking requests all night Wishkey Wednesday Premiun
							descounted after 10pm DJ at 10pm
						</p>
						<p className='mb-10 text-center'>DJ at 10pm</p>

						<h1 className='text-center text-2xl'>Wednesday Seafood Special</h1>
						<p className='text-center text-2xl text-blue-400'>
							Seafood Special from 5pm - 10pm
						</p>
					</div>
					<div className='border-solid border-2  border-gray-300 rounded-lg shadow-2xl'>
						<h1 className='text-center text-2xl mb-8 mt-10'>Thursday</h1>

						<h1 className='text-center text-2xl mb-5'>
							Thursday Night DJ District Trivia
						</h1>
						<p className='mx-5 text-center'>
							Every Thursday at 7pm with prizes: flat screen, Go Pro and more!
							John Coulter spins every Thursday night
						</p>
						<p className='text-center mt-5'>Trivia Event 7pm / DJ at 10pm</p>
					</div>
					<div className='border-solid border-2  border-gray-300 rounded-lg shadow-2xl'>
						<h1 className='text-center text-2xl mb-8 mt-10'>Friday</h1>

						<h1 className='text-center text-2xl'>Fridays DJ LUV</h1>
						<p className='text-center mt-5'>
							Big Travis taking requests all night DJ at 10pm
						</p>
					</div>
					<div className='border-solid border-2  border-gray-300 rounded-lg shadow-2xl pb-10'>
						<h1 className='text-center text-2xl mb-8 mt-10'>Saturday</h1>

						<h1 className='text-center text-2xl'>Saturday Showdown</h1>
						<p className='mb-10 text-center mx-5'>
							DJ Drew AKA The Drewfus, spins rock, pop, and hip hop from the 80s
							through today Every Saturday fom 10pm until close.
						</p>
						<p className='text-center'>DJ Lay Loca at 10pm</p>
					</div>
					<div className='border-solid border-2  border-gray-300 rounded-lg shadow-2xl pb-10 mb-5'>
						<h1 className='text-center text-2xl mb-8 mt-8'>Sunday</h1>

						<h1 className='text-center  text-2xl'>Sunday Brunch / DJ Russel</h1>
						<p className='mb-10 text-center mx-5'>
							$13.95 Brunch Buffet. Pancakes, French toast, bacon, sausage, home
							fries, eggs Benedict, waffles made to order, carving station,
							omlette station, fresh fruit & salad station, plus numberous lunch
							specialties. Every Sunday From 10m until 2pm.
						</p>
						<p className='text-center'>
							Check on Facebook for events & DJ Russel 10pm
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
