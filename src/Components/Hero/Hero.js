import React from 'react'
import video from '../Assets/IMG_0096.mp4'
import './Hero.css'
export default function Hero() {
    return (
			<div>
				<div className='container  lg:mx-auto md:mx-auto'>
					<video
						className='video-size sm:ml-10   md:mx-auto lg:mx-auto lg:w-full'
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
