import React from 'react';
import './Events.css';
import poker from './Assets/poker.png';
import service from './Assets/serviceIndustry.jpg';
import travis from './Assets/travis.jpg';
import district from './Assets/district.png';
import friday from './Assets/friday.png';
import saturday from './Assets/saturday.png';
import sunday from './Assets/sunday.jpg';

export default function Events() {
	return (
		<div className='container mx-auto sm:px-28'>
			<div className='eventBanner -mt-28 opacity-40 '></div>
			<h1 className='about-us  text-white opacity-100 absolute inset-x-0 top-40  text-center text-7xl mt-10 mb-10'>
				Weekly Events
			</h1>

			<div className='container -mt-24 mx-auto h-auto relative border-2 h-screen  border-opacity-100 border-solid rounded-t-lg shadow-inner-2xl shadow-2xl  bg-white '>
				<div className='container mx-auto sm:px-24 mt-10'>
					<p className='about-us-p'>
						Blue Iguana’s famous night life 7 days a week. From Dj’s to poker.
						There’s always something happening late night at “The Iggy”
					</p>
				</div>

				<div className='container mx-auto sm:px-24 mt-10 mb-20'>
					<h1 className='text-center text-4xl text-indigo-700'>
						Happy Hour All Day Until 8pm!
					</h1>
				</div>

				<div className='container mx-22 px-32 grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-3'>
					<div>
						<h1 className='ml-28 text-2xl mb-8'>Monday</h1>
						<img className='events-image mb-5' src={poker} alt='' />
						<h1 className='ml-12 text-2xl mt-10'>Monday Night Poker</h1>
						<p>
							World Tavern Poker, America’s number 1 bar poker league.Free!
							Every Monday at 7pm & 9:00pm NFL Monday Night Football. Acustic
							music every other Monday
						</p>
					</div>
					<div>
						<h1 className='ml-28 text-2xl mb-8'>Tuesday</h1>
						<img className='events-image mb-5' src={service} alt='' />

						<h1 className='ml-12 text-2xl mt-10'>Service Industry Night</h1>
						<p className='mb-10'>
							Russell, AKA DJ LUV spins all night. Special discounts for
							industry Friends!
						</p>
						<p>
							Every Tueday From 10pm until close Tequila Tuesday after 10pm!
						</p>
					</div>
					<div>
						<h1 className='ml-24 text-2xl mb-8 mt-10'>Wednesday</h1>
						<img className='events-image mb-5' src={travis} alt='' />
						<h1 className='ml-12 text-2xl'>The Big Travis Show</h1>
						<p className='mb-10'>
							Big Travis taking requests all night Wishkey Wednesday Premiun
							descounted after 10pm DJ at 10pm
						</p>
						<p className='mb-10'>DJ at 10pm</p>

						<h1 className='ml-12 text-2xl'>Wednesday Seafood Special</h1>
						<p className='ml-8 text-2xl text-blue-400'>
							Seafood Special from 5pm - 10pm
						</p>
					</div>
					<div>
						<h1 className='ml-28 text-2xl mb-8 mt-10'>Thursday</h1>
						<img className='events-image mb-5' src={district} alt='' />
						<h1 className=' text-2xl'>Thursday Night DJ District Trivia</h1>
						<p>
							Every Thursday at 7pm with prizes: flat screen, Go Pro and more!
							John Coulter spins every Thursday night
						</p>
						<p>Trivia Event 7pm / DJ at 10pm</p>
					</div>
					<div>
						<h1 className='ml-28 text-2xl mb-8 mt-10'>Friday</h1>
						<img className='events-image mb-5' src={friday} alt='' />
						<h1 className='ml-12 text-2xl'>Fridays DJ LUV</h1>
						<p>Big Travis taking requests all night DJ at 10pm</p>
					</div>
					<div>
						<h1 className='ml-28 text-2xl mb-8 mt-10'>Saturday</h1>
						<img className='events-image mb-5' src={saturday} alt='' />
						<h1 className='ml-12 text-2xl'>Saturday Showdown</h1>
						<p className='mb-10'>
							DJ Drew AKA The Drewfus, spins rock, pop, and hip hop from the 80s
							through today Every Saturday fom 10pm until close.
						</p>
						<p>DJ Lay Loca at 10pm</p>
					</div>
					<div>
						<h1 className='ml-28 text-2xl mb-8 mt-8'>Sunday</h1>
						<img className='events-image mb-5' src={sunday} alt='' />
						<h1 className='ml-2 text-2xl'>Sunday Brunch / DJ Russel</h1>
						<p className='mb-10'>
							$13.95 Brunch Buffet. Pancakes, French toast, bacon, sausage, home
							fries, eggs Benedict, waffles made to order, carving station,
							omlette station, fresh fruit & salad station, plus numberous lunch
							specialties. Every Sunday From 10m until 2pm.
						</p>
						<p>Check on Facebook for events & DJ Russel 10pm</p>
					</div>
				</div>
			</div>
		</div>
	);
}
