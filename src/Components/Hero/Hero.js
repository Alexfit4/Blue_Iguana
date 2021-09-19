import React from 'react'
import video from '../Assets/IMG_0096.mp4'
import './Hero.css'
export default function Hero() {
    return (
			<div>
				<div className='container'>
					<video
						className='video-size sm:ml-10   md:mx-6 lg:ml-48 lg:w-full'
						autostart
						autoPlay
						muted
						src={video}
						type='video/mp4'
						width={1100}
					/>
				</div>
				<h1>testing</h1>
			</div>
		);
}
