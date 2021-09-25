import React from 'react';
import logo from '../Assets/iguanalogo_horiz.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default function Navbar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<div class='container lg:mx-auto md:mx-auto'>
				<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3'>
					<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
						<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
							<img className='w-28' src={logo} alt='' />
							<button
								className='text-white  cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
								type='button'
								onClick={() => setNavbarOpen(!navbarOpen)}>
								<i className='fas fa-bars '></i>
							</button>
						</div>
						<div
							className={
								'lg:flex flex-grow items-center' +
								(navbarOpen ? ' flex' : ' hidden')
							}
							id='example-navbar-danger'>
							<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
								<li className='nav-item'>
									<a
										className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
										href='#pablo'>
										<span className='ml-2'>Home</span>
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
										href='#pablo'>
										<span className='ml-2'>About us</span>
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
										href='#pablo'>
										<div class=''>
											<div class='dropdown '>
												<Link to="/Menu" class=' font-bold ml-2 rounded inline-flex items-center'>
													<span class='mr-1'>Menu</span>
													<svg
														class='fill-current h-4 w-4'
														xmlns='http://www.w3.org/2000/svg'
														viewBox='0 0 20 20'>
														<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
													</svg>
												</Link>
												<ul class='dropdown-menu  hidden text-gray-700 pt-1'>
													<li class=''>
														<a
															class='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
															href='#'>
															Blue Iguana Menu
														</a>
													</li>
													<li class=''>
														<a
															class='bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
															href='#'>
															Drink Menu
														</a>
													</li>
												</ul>
											</div>
										</div>
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
										href='#pablo'>
										<div class=''>
											<div class='dropdown '>
												<button class=' font-bold ml-2 rounded inline-flex items-center'>
													<span class='mr-1'>Events</span>
													<svg
														class='fill-current h-4 w-4'
														xmlns='http://www.w3.org/2000/svg'
														viewBox='0 0 20 20'>
														<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
													</svg>
												</button>
												<ul class='dropdown-menu  hidden text-gray-700 pt-1'>
													<li class=''>
														<a
															class='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
															href='#'>
															Daily Events
														</a>
													</li>
													<li class=''>
														<a
															class='bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
															href='#'>
															Sport Events
														</a>
													</li>
												</ul>
											</div>
										</div>
									</a>
								</li>
								<li className='nav-item'>
									<a
										className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
										href='#pablo'>
										<span className='ml-2'>Contact</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
}
