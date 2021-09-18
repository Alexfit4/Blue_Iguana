import React from 'react'
import video from '../Assets/IMG_0096.mp4'
import './Hero.css'
export default function Hero() {
    return (
			<div>
				<div className='container'>
					<video
						className='sm:ml-16 md:ml- lg:ml-48 lg:w-full'
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
