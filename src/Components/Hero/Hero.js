import React from 'react'
import video from '../Assets/IMG_0096.mp4'
import { Player } from 'video-react';
import ReactPlayer from 'react-player';
export default function Hero() {
    return (
			<div>
				<div className='container mx-auto'>
					<video className="lg:ml-28" controls autostart autoPlay src={video} type='video/mp4' width={1200} />
				</div>
			</div>
		);
}
