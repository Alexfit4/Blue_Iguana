import React from 'react'
import video from '../Assets/IMG_0096.mp4'
import './Hero.css'
export default function Hero() {
    return (
			<div className='sm:-mt-20 z-40'>
				<div className='container'>
					<video
						className='video-size md:w-screen '
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
