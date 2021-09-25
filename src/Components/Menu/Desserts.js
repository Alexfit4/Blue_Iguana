import React from 'react'
import { DessertsMenu } from './MenuList';
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
export default function Desserts() {
  	return (
			<div>
				<h1
					id='Dessert'
					className='text-center text-5xl font-bold mt-10 mb-10 text-yellow-500'>
					DESSERTS
				</h1>

				<div className='container md:mx-auto'>
					<div className=' p-10 grid lg:grid-cols-2 gap-4 md:grid-col-1  md:rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid  '>
						{DessertsMenu.map((x) => {
							return (
								<div className='container flex flex-wrap mx-auto mt-10 '>
									<Card>
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
