import React from 'react'
import video from '../Assets/IMG_0096.mp4'
import './Hero.css'
export default function Hero() {
    return (
			<div>
<<<<<<< HEAD
				<div className='video'>
					<video
						// className='video-size sm:ml-10   md:mx-6 lg:ml-48 lg:w-full'
=======
				<div className='container  lg:mx-auto md:mx-auto'>
					<video
						className='video-size sm:ml-10   md:mx-auto lg:mx-auto lg:w-full'
>>>>>>> dc70d39499381e8e09c0eb91ffc62396362a4170
						autostart
						autoPlay
						muted
						src={video}
						type='video/mp4'
						width={1100}
					/>
				</div>
			</div>
		);
}
