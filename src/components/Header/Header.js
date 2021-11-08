import React from 'react';
import './header.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../commons/Button/Button';

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className='header'>
			<div className='logo'>
				<Link to=''>Computare.</Link>
				<div className='vertical-line'></div>
			</div>

			<div
				className={menuOpen ? 'nav-links-div open-menu' : 'nav-links-div'}
				onClick={() => setMenuOpen(false)}
			>
				<NavLink className='navlink' to={''}>
					Home
				</NavLink>
				<NavLink className='navlink' to={'/services'}>
					Services
				</NavLink>
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
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<div className='menu-btn'></div>
			</div>
		</div>
	);
}
