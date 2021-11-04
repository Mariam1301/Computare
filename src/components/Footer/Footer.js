import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import 'fontsource-firago/400.css'
import './footer.css'

const Footer = (props) => {
	const renderLinks = () => {
		return (
			<div className='footer-links'>
				<NavLink className='footer-link' to='/'>
					Home
				</NavLink>
				<NavLink className='footer-link' to='/services'>
					Services
				</NavLink>
				<NavLink className='footer-link' to='/prices'>
					Prices
				</NavLink>
				<NavLink className='footer-link' to='/about-us'>
					About us
				</NavLink>
				<NavLink className='footer-link' to='/s'>
					Cookies
				</NavLink>
				<NavLink className='footer-link' to='/a'>
					Privacy Notice
				</NavLink>
				<NavLink className='footer-link' to='/d'>
					Terms of Engagement
				</NavLink>
			</div>
		)
	}

	const renderFooterIcons = () => {
		return (
			<div className='footer-contact-icons'>
				<Link to='/'>
					<FaTwitter className='footer-contact-icons-icon' />
				</Link>
				<Link to='/'>
					<FaFacebookF className='footer-contact-icons-icon' />
				</Link>
				<Link to='/'>
					<FaInstagram className='footer-contact-icons-icon' />
				</Link>
			</div>
		)
	}

	return (
		<Fragment>
			<footer className='footer'>
				<div className='footer-nav'>
					{renderLinks()}
					<div>
						<Link to='/' className='footer-nav-title'>
							Computare.
						</Link>
					</div>
				</div>
				<div className='footer-contact'>
					<h2 className='footer-contact-number'>+995 577 50 12 57</h2>
					{renderFooterIcons()}
					<div className='footer-contact-email'>
						<FiMail className='footer-contact-icons-icon' />
						<Link to='mailto:info@computare.ge'>Info@computare.ge</Link>
					</div>
				</div>
			</footer>
		</Fragment>
	)
}

export default Footer
