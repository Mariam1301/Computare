import React from 'react';
import './header.css';
export default function Header() {
	return (
		<div className='header'>
			<div className='logo'>
				<p>Computare.</p>
				<div className='vertical-line'></div>
			</div>

			<div className='nav-links-div'>
				<a>Home</a>
				<a>Services</a>
				<a>Prices</a>
				<a>About Us</a>
				<a className='highlight'>Contact</a>
			</div>
		</div>
	);
}
