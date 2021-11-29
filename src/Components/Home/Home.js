import React from 'react';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import './Home.css';
import { data } from './HomeData';
import friendsDrinking from './Assets/friendsDrinking.jpg';
import birthdayCake from './Assets/birthdayCake.jpg';
import drinksHome from './Assets/homeDrinks.jpg';
export default function Home() {
	return (
		<div className='container w-screen lg:mx-auto lg:px-28 sm:px-28 mx-auto md:mx-auto md:px-28 '>
			<div className=' mx-auto'>
				<Hero />
			</div>

			<div className='container home-container -mt-24 relative  border-2  border-opacity-100 border-solid rounded-lg shadow-inner-2xl shadow-2xl  bg-white z-10 '>
				<h1 className='font-bold relative text-center text-3xl mt-10 mb-28'>
					Welcome to Blue Iguana!
				</h1>

				<div className='container relative md:mx-auto mb-28'>
					<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
						{data.map((x) => {
							return (
								<div>
									<img
										className='home-image ml-32 md:ml-24 lg:ml-14'
										src={x.image}
										alt=''
									/>
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

				<div className='container relative mx-auto px-28 md:px-20 mt-10'>
					<div className='mx-auto md:px-28 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5'>
						<div>
							<img
								src={friendsDrinking}
								className='w-72'
								alt='friends drinking'
							/>
							<h2 className=' md:ml-8   mb-5 font-bold'>Daily Bar Events</h2>
							<p>
								Wednesday ladies night, boogey down Friday’s and poker Monday
								with DJ’s 5 days a week.
							</p>
						</div>

						<div>
							<img src={birthdayCake} className='w-72' alt='birthday cake' />
							<h2 className='md:ml-8 mb-5 font-bold'>Celebrate With Us!</h2>
							<p>
								Book a birthday party, anniversary, or any other special event
								in our private room, The Atrium.
							</p>
						</div>

						<div>
							<img src={drinksHome} className='w-72' alt='ice splash in cups' />
							<h2 className='md:ml-10 mb-5 font-bold'>Happy Hour</h2>
							<p>
								Great deals on beer, wine and spirits; everyday, all day until
								8PM.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
