import React from 'react';
import Hero from '../Hero/Hero';
import { data } from './HomeData';
export default function Home() {
	return (
		<div>
			<Hero />
			<h1 className='font-bold text-center text-3xl mt-10'>
				Welcome to Blue Iguana!
			</h1>

			<div className='container md:mx-auto'>
				<div className='mx-10 text-2xl mb-10 mt-10'>
					<h3>WELCOME TO BLUE IGUANA</h3>
					<p>
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

					<p>
						If you Know an organization, individual, or cause you believe would
						benefit from holding an event here at Blue Iguana, please ask for a
						manager, and we would be happy to help you organize and host your
						event for FREE! Blue Iguana Supports LOCAL!
					</p>

					<p>
						We believe in our community and here at Blue Iguana we have a strong
						focus to support local business.met lacus accumsan et viverra justo
						commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus
						et magnis dis parturient montes, nascetur ridiculus mus. Nam
						fermentum, nulla luctus pharetra vulputate, felis tellus mollis
						orci, sed rhoncus pronin sapien nunc accuan eget.
					</p>
				</div>
				<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{data.map((x) => {
						return (
							<div>
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
	);
}
