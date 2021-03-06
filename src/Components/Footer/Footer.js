import React from 'react';
import './footer.css';
export default function Footer() {
	return (
		<div className='  h-full md:container mx-auto md:px-28 border-opacity-100 border-solid shadow-inner-2xl'>
			<nav id='footer' className=' bottom-footer opacity-40  bg-gray-800'>
				<div className='container mx-auto pt-8 pb-4'>
					<div className='flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2'>
						<div className='w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6'></div>

						<div className='w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6'>
							<h4 className='text-white text-center'>
								12727 Shoppes Lane <br /> Fairfax VA, 20120
							</h4>
							<ul className='nav navbar-nav'>
								<li id='navi-2' className='leading-7 text-sm text-center'>
									<a className='text-white underline text-small' href='/page-1'>
										703-502-8108
									</a>
								</li>
							</ul>
						</div>

						<div className='w-full text-white overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6'>
							<h4 className='text-white text-center'>Hours</h4>
							<ul className=''>
								<li id='navi-2' className='leading-7 text-white text-sm text-center'>
									<a className='hours text-white' href='/page-1'>
										Monday-Friday: 11:30am - 2:00am Saturday: 12:00pm - 2:00am
										<br /> Sunday: 10:00am - 2:00am{' '}
									</a>
								</li>
							</ul>
						</div>

						<div className='w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6'></div>
					</div>

					<div className='social '>
						<i className='fab fa-facebook text-white'></i>
						<i className='fab fa-instagram text-white'></i>
					</div>

					<div className='pt-4 md:flex md:items-center md:justify-center '>
						<ul className=''>
							<li
								className='md:mx-2 md:inline leading-7 text-sm'
								id='footer-navi-2'>
								<a
									className='text-white underline text-small'
									href='/disclaimer'>
									2021 ?? Blue Iguana{' '}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
