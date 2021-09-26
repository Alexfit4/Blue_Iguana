import React from 'react'
import { EntreeMenu } from './MenuList';
import {
	Card,
	CardRow,
	CardStatus,
	CardImage,
	CardBody,
	Paragraph,
} from '@material-tailwind/react/';
import H6 from '@material-tailwind/react/Heading6';


export default function Entrees() {
  	return (
			<div>
				<h1
					id='Entrees'
					className='text-center text-5xl font-bold mt-10 mb-10 text-yellow-500'>
					ENTREES
				</h1>

				<h2 className='text-center text-3xl'>AVAILABLE UNTIL 10PM</h2>

				<div className='container md:mx-auto'>
					<div className=' p-10 grid lg:grid-cols-2 gap-4 md:grid-col-1  md:rounded-lg border-4 text-yellow-700 border-opacity-75 border-solid  '>
						{EntreeMenu.map((x) => {
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
												<Paragraph color='gray'>{x.description1}</Paragraph>
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
