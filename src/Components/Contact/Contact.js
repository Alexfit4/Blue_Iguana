import React from 'react'
import './Contact.css'
import contactusMap from './Assets/contactusMap.png'
export default function Contact() {
    return (
			<div className='container mx-auto px-28'>
				<div className='contactBanner -mt-28 opacity-40 '></div>
				<h1 className='about-us text-white opacity-100 absolute top-20 text-center text-3xl mt-10 mb-10'>
					Contact Us
				</h1>

				<div className='container -mt-24 h-auto mx-auto relative border-2 h-screen  border-opacity-100 border-solid rounded-t-lg shadow-inner-2xl shadow-2xl  bg-white '>
					<div className='container  mx-auto px-24 mt-10'>
						<h1 className='text-center contact-us'>Hours of operation</h1>
						<div className='container mt-5   ml-14 px-80  grid grid-cols-2 gap-2'>
							<div>
								<p>Monday-Friday</p>
								<p>Saturday</p>
								<p>Sunday</p>
							</div>
							<div>
								<p>11:30am - 2:00am</p>
								<p>12:00am - 2:00am</p>
								<p>10:00am - 2:00am</p>
							</div>
						</div>

						<div className='container mt-10 text-center'>
							<h1 className='contact-us mt-10 mb-10'>Reservations</h1>
							<p>Contact us to do dinner or events reservation by phone</p>
							<p>+703-502-8108</p>
							<p>dining@theblueiguana.com</p>
						</div>

						<div className='container mt-10 text-center mb-20'>
							<h1 className='contact-us mb-10'>We are located</h1>
							<p>12727 Shoppes Lane</p>
							<p>FairFax,VA 20120</p>
						</div>
					</div>

					<div>
						<img src={contactusMap} alt='contactusMap' />
					</div>
				</div>
			</div>
		);
}
