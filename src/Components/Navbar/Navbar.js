import React from 'react';
import logo from '../Assets/iguanalogo_horiz.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
export default function Navbar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<div className='h-full container mx-auto px-28 '>
			<div class='container relative z-40'>
				<nav className='relative  flex flex-wrap items-center justify-between px-2 py-3 w-screen bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-600 shadow-2xl w-auto'>
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
									<Link
										to='/'
										className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
										<span className='ml-2'>Home</span>
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										to='/About'
										className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
										<span className='ml-2'>About us</span>
									</Link>
								</li>
								<li className='nav-item'>
									<a className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
										<div class=''>
											<div class='dropdown '>
												<Link
													to='/Menu'
													class=' font-bold ml-2 rounded inline-flex items-center'>
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
														<Link
															class='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
															to='/Menu'>
															Food Menu
														</Link>
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
									<Link
										to='/Events'
										className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
										<span className='ml-2'>Events</span>
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										to='/Contact'
										className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
										<span className='ml-2'>Contact</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}
