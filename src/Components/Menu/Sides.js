import React from 'react';
import { SidesMenu } from './MenuList';
import {
	Card,
	CardRow,
	CardHeader,
	CardStatus,
	CardStatusFooter,
	Icon,
	CardImage,
	CardBody,
	Paragraph,
} from '@material-tailwind/react/';
import H6 from '@material-tailwind/react/Heading6';

export default function Sides() {
	return (
		<div>
			<h1
				id='Sides'
				className='text-center text-5xl font-bold mt-10 mb-10 text-yellow-500'>
				SIDES
			</h1>

			<div className='container md:mx-auto'>
				<div className=' p-10 grid lg:grid-cols-2 gap-4 md:grid-col-1  md:rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid  '>
					{SidesMenu.map((x) => {
						return (
							<div className='container flex flex-wrap mx-auto mt-10 '>
								<Card>
									<CardRow>
										<CardBody color='white' size='lg' iconOnly>
											<H6 color='gray'>{x.name}</H6>
										</CardBody>

										<CardStatus amount={x.price} />
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
