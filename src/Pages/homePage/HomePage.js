import React from 'react';
import welcome from './images/welcome.png';
import ServiceSection from '../../components/seviceSection/serviceSection';
import ExpertGuides from './../../components/ExpertGuides/ExpertGuides';

import './home.css';
import Button from './../../components/commons/Button/Button';

const Homepage = () => {
	return (
		<div className='home-page'>
			<div className='welcome'>
				<div className='home-text'>
					<p>
						<p id='underline'>Our mission</p>
						is to help companies achieve their goals in a rapidly changing
						environment, by providing services that are both in compliance with
						local law and also are unique to the needs of each client.
					</p>
					<Button label='prices' linkTo={'/'} />
				</div>
				<img src={welcome}></img>
			</div>
			<ServiceSection />
			<ExpertGuides />
		</div>
	);
};

export default Homepage;
