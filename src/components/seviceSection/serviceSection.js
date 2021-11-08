import React from 'react';
import Service from '../service/service';
import rectangle from './images/rectangle.svg';
import triangle from './images/triangle.svg';
import circle from './images/circle.svg';
import './seviceSection.css';

const ServiceSection = () => {
	return (
		<div className='home-page-services'>
			<h2>Our Services</h2>
			<div className='home-page-services-div'>
				<Service
					src={triangle}
					title='Company Formation'
					text='Full Company Set up in Tbilisi, collection of all relevant documentation, opening a bank account, registration remotely or with visiting the public hall.'
				/>
				<Service
					src={rectangle}
					title='Accountancy Services'
					text='Tax and financial accounting, timely reporting.'
				/>
				<Service
					src={circle}
					title='Opening a bank account'
					text='Opening a personal or business bank accounts in 2 of the leading Banks in Georgia. Service can be done remotely as well as by visiting the Banks.'
				/>
			</div>
		</div>
	);
};

export default ServiceSection;
