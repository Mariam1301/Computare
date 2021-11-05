import { Link } from 'react-router-dom'
import './button.css'

const Button = ({ label, linkTo }) => {
	return (
		<Link to={linkTo} className='highlight'>
			{label}
		</Link>
	)
}

export default Button
