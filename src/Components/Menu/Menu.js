import React from 'react';
import menuHero from '../Assets/menudish-1-1500x900.jpg';
import { Appetizers, heroImages, indexList } from './MenuList';
import './Menu.css';
import { Link } from 'react-scroll';
import {
	Card,
	CardRow,
	CardStatus,
	CardImage,
	CardBody,
	Paragraph,
} from '@material-tailwind/react/';
import H6 from '@material-tailwind/react/Heading6';
import SmallPlates from './SmallPlates';
import TaterTots from './TaterTots';
import Salads from './Salads';
import Sandwhiches from './Sandwhiches';
import Entrees from './Entrees';
import Sides from './Sides';
import PremiumSides from './PremiumSides';
import Desserts from './Desserts';
import StatusCard from '../StatusCard/StatusCard';

export default function Menu() {
	return (
		<div className='container mx-auto px-28'>
			<div className='relative h-96 m-8 -mt-16 overflow-hidden rounded-lg bg-indigo-500 container mx-auto'>
				<div className='absolute z-30  flex w-full h-full'>
					<div className='relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2'>
						<h2 className='text-7xl hero-menu-text mt-60'>
							Blue Iguana Food Menu
						</h2>
						<span></span>
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
								className='absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50'>
								<polygon points='0,0 100,0 50,100 0,100'></polygon>
							</svg>
						</div>
					</div>
				</div>
				<div className='absolute top-0 right-0 block w-9/12 h-full'>
					<img
						alt='Snowy mountain lake'
						className='object-cover min-w-full h-full'
						src={menuHero}
					/>
				</div>
			</div>

			<div className='border-2 -mt-12  border-opacity-100 border-solid rounded-lg shadow-inner-2xl shadow-2xl  bg-white'>
				<div className='container max-w-7xl mx-auto px-4'>
					<div className='flex lg:flex-row md:flex-col flex-col relative z-50'>
						<StatusCard
							color='red'
							icon='grade'
							title='Speciality Menu'></StatusCard>
						<StatusCard
							color='lightBlue'
							icon='brunch_dining'
							title='Breakfast Menu'></StatusCard>
						<StatusCard
							color='orange'
							icon='restaurant_menu'
							title='Weekly Specials'></StatusCard>
						<StatusCard
							color='teal'
							icon='event_available'
							title='Holiday'></StatusCard>
					</div>
				</div>

				<div className='container mx-auto flex md:justify-around lg:mx-64 flex-wrap grid lg:grid-cols-2 sm:grid-col-1  '>
					{indexList.map((x) => {
						return (
							<Link
								activeClass='active'
								spy={true}
								smooth={true}
								to={x}
								className='bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white text-center py-2 px-4 lg:mx-48 sm:mx-0 mt-5 rounded '>
								{x}
							</Link>
						);
					})}
				</div>
			</div>
			<h1
				id='Appetizers'
				className='text-center text-5xl font-bold mt-10 mb-10 text-yellow-500'>
				APPETIZERS
			</h1>

			<div className='container md:mx-auto '>
				<div className=' p-10 grid lg:grid-cols-2 gap-4 md:grid-col-1  md:rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid bg-white '>
					{Appetizers.map((x) => {
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
			</div>

			<div>
				<SmallPlates />
			</div>

			<div>
				<TaterTots />
			</div>

			<div>
				<Salads />
			</div>

			<div>
				<Sandwhiches />
			</div>
			<div>
				<Entrees />
			</div>
			<div>
				<Sides />
			</div>
			<div>
				<PremiumSides />
			</div>
			<div>
				<Desserts />
			</div>

			<div className='container md:mx-auto mt-10'>
				<p>
					* *Contains (may contain) raw or undercooked ingredients. Consuming
					raw or undercooked meats, poultry, seafood, shellfish or eggs may
					increase your risk of food borne illness.
				</p>
			</div>
		</div>
	);
}
