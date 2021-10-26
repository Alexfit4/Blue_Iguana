import React from 'react';
import './about.css';
import outside from './Assets/outside.png';
import inside from './Assets/inside.png';
import insideBar from './Assets/insideBAR.png';

export default function About() {
	return (
		<div className='container mx-auto sm:px-28  '>
			<div className='aboutBanner -mt-28 opacity-75 '></div>
			<h1 className='about-us  text-white opacity-100 absolute inset-x-0 top-40  text-center text-7xl mt-10 mb-10 '>
				About Us
			</h1>

			<div className='container -mt-24 mx-auto h-auto relative border-2 h-screen  border-opacity-100 border-solid rounded-t-lg shadow-inner-2xl shadow-2xl  bg-white '>
				<div className='container mx-auto sm:px-24 mt-10'>
					<p className='about-us-p'>
						Thank you for choosing to dine with us! Here at Blue Iguana we are
						dedicated in providing our guests with a genuine, home-style,
						classic, and quality dining experience. Not only do we cherish each
						guest that walks through our door, we also dedicate ourselves to our
						community! The Blue Iguana team makes it a goal to participate in,
						and host a minimum of 60 charity and fundraising events annually. It
						is our pleasure to give back to and build our community up to its
						highest potential, and care for those in need to the best of our
						ability. This is our home, and the people of this community are our
						family.
					</p>

					<p className='mt-10 about-us-p'>
						If you Know an organization, individual, or cause you believe would
						benefit from holding an event here at Blue Iguana, please ask for a
						manager, and we would be happy to help you organize and host your
						event for FREE! Blue Iguana Supports LOCAL!
					</p>

					<p className='mt-10 about-us-p'>
						We believe in our community and here at Blue Iguana we have a strong
						focus to support local business.
					</p>
				</div>
				<div className='container mx-auto md:px-0 md:px-48 grid sm:grid-col-1 grid-cols-3 gap-6 mt-10'>
					<img src={inside} alt='inside' />
					<img src={outside} alt='outside' />
					<img src={insideBar} alt='insideBar' />
				</div>
			</div>
		</div>
	);
}
