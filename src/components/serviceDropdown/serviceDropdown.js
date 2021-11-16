import React from 'react';
import './serviceDropdown.css';
import servicesArray from './serviceArray';
import { Link } from 'react-router-dom';

const ServiceDropdown = () => {
	return (
		<div className='serviceDropdown'>
			{servicesArray.map((service) => (
				<Link to={`services/${service.id}`}>{service.title}</Link>
			))}
		</div>
	);
};

export default ServiceDropdown;
