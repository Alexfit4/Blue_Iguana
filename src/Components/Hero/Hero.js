import React from 'react'
import video from '../Assets/IMG_0096.mp4'
import './Hero.css'
export default function Hero() {
    return (
			<div className='-mt-20 z-40'>
				<div className='container  w-screen'>
					<video
						className='video-size w-screen '
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
