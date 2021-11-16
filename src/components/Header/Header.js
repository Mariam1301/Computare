import React from 'react';
import './header.css';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';
import Button from '../commons/Button/Button';
import ServiceDropdown from '../serviceDropdown/serviceDropdown';

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [serviceOpen, setServiceOpen] = useState(false);

	const handleServiceOpen = () => {
		setServiceOpen(!serviceOpen);
	};

	const handleServiceClick = () => {
		setMenuOpen(!menuOpen);
		setServiceOpen(false);
	};
	let servicesRef = useRef();
	let menuRef = useRef();
	useEffect(() => {
		let handler = (e) => {
			if (!servicesRef.current.contains(e.target)) setServiceOpen(false);
			if (
				!menuRef.current.contains(e.target) &&
				e.target.className === 'hamburger-menu'
			)
				setMenuOpen(false);
		};

		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});
	return (
		<React.Fragment>
			<div className='header'>
				<div className='logo'>
					<Link to=''>Computare.</Link>
					<div className='vertical-line'></div>
				</div>

				<div
					className={menuOpen ? 'nav-links-div open-menu' : 'nav-links-div'}
					onClick={() => setMenuOpen(false)}
					ref={menuRef}
				>
					<NavLink className='navlink' to={''}>
						Home
					</NavLink>
					<a className='navlink' onClick={() => handleServiceOpen()}>
						Services
					</a>
					<NavLink className='navlink' to={'/prices'}>
						Prices
					</NavLink>
					<NavLink className='navlink' to={'/about-us'}>
						About Us
					</NavLink>
					<Button label='Contact' linkTo={'/contact'} />
				</div>
				<div
					className={menuOpen ? 'hamburger-menu open' : 'hamburger-menu'}
					onClick={() => handleServiceClick()}
				>
					<div className='menu-btn'></div>
				</div>
				<div
					className={serviceOpen ? 'service-dropdown-open' : 'service-dropdown'}
					ref={servicesRef}
					onClick={() => setServiceOpen(false)}
				>
					{serviceOpen ? <ServiceDropdown /> : ''}
				</div>
			</div>
		</React.Fragment>
	);
}
