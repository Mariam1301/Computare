import React from 'react';
import './service.css';

const Service = ({ src, title, text }) => {
	return (
		<div className='single-service'>
			<img width='70px' height='70px' src={src}></img>
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	);
};

export default Service;
