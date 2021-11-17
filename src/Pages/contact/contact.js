import React from 'react'
import { useEffect } from 'react'
import './contact.css'
const Contact = () => {
	useEffect(() => {
		window.scroll({ top: 0, behavior: 'smooth' })
	}, [])
	return (
		<div className='contact'>
			<div className='contact-title'>
				<h1>Contact</h1>
			</div>
			<div className='contact-info'>
				<div className='contact-info-details'>
					<p>TEL: +995 577 40 12 57</p>
					<p>E-mail : info@computare.ge</p>
					<p>Address: S.Chikovani street 2/14, Tbilisi, Georgia 0171</p>
				</div>
				<div className='map'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.5656448581022!2d44.7764403407627!3d41.714852439190764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc6daef14203a021!2z4YOQ4YOR4YOY4YOi4YOj4YOg4YOY4YOU4YOc4YOi4YOX4YOQIOGDmOGDnOGDouGDlOGDnOGDoeGDmOGDo-GDoOGDmCDhg5vhg53hg5vhg5bhg5Dhg5Phg5Thg5Hhg5jhg6Eg4YOq4YOU4YOc4YOi4YOg4YOYICjhg5Dhg5jhg5vhg6op!5e0!3m2!1sen!2sge!4v1637087213109!5m2!1sen!2sge'
						max-width='300px'
						height='250px'
						style={{ border: '0' }}
						allowfullscreen=''
						loading='lazy'
						title='Address'
					></iframe>
				</div>
			</div>
		</div>
	)
}

export default Contact
