import React from 'react';
import menuHero from '../Assets/menudish-1-1500x900.jpg';
import { SmallPlatesMenu } from './MenuList';
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

export default function SmallPlates() {
	return (
		<div>
			{' '}
			<h1
				id='SmallPlates'
				className='text-center text-5xl font-bold mt-10 mb-10 text-yellow-500'>
				SMALL PLATES
			</h1>
			<div className='container md:mx-auto'>
				<div className=' p-10 grid lg:grid-cols-2 gap-4 md:grid-col-1  md:rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid bg-white  '>
					{SmallPlatesMenu.map((x) => {
						return (
							<div className='container flex flex-wrap mx-auto mt-10 '>
								<Card className='bg-gray-200'>
									<CardRow>
										<CardImage
											src={x.image}
											className='w-28'
											alt='Card Image'
										/>

										<CardStatus amount={x.price} />
										<CardBody>
											<H6 color='gray'>{x.name}</H6>
											<Paragraph color='gray'>{x.description}</Paragraph>
											<Paragraph color='gray'>{x.description1}</Paragraph>
											<Paragraph color='gray'>{x.description2}</Paragraph>
											<Paragraph color='gray'>{x.description3}</Paragraph>
										</CardBody>
									</CardRow>
								</Card>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
