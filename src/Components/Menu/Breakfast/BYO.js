import React from 'react';
import { byo } from '../MenuList';
import {
	Card,
	CardRow,
	CardStatus,
	CardImage,
	CardBody,
	Paragraph,
} from '@material-tailwind/react/';
import H6 from '@material-tailwind/react/Heading6';

export default function BYO() {
	return (
		<div>
			<h1
				id='Breakfast Menu'
				className='text-center text-5xl font-bold mt-10 mb-10 text-yellow-500'>
				BUILD YOUR OWN
			</h1>
			<p className="text-center text-white">Burrito, sandwich or omelet, served with home fries</p>,
			<div className='container md:mx-auto'>
				<div className=' p-10 grid lg:grid-cols-2 gap-4 md:grid-col-1  md:rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid bg-white '>
					{byo.map((x) => {
						return (
							<div className='container flex flex-wrap mx-auto mt-10 '>
								<Card className='bg-gray-200'>
									<CardRow>
										<CardStatus className='text-left' amount={x.price} />

										<CardBody>
											<H6 color='gray'>{x.name}</H6>
											<ul>
												<Paragraph className='w-full text-left' color='gray'>
													{x.description}
												</Paragraph>
											</ul>
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
