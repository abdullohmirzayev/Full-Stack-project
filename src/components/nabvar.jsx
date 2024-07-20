import { Link } from 'react-router-dom'
import { logo } from '../constatnts'

const Nabvar = () => {
	return (
		<div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3'>
			<Link to={'/'}>
				<img src={logo} alt='' />

				<img
					src='https://i.ibb.co/X4r8WgJ/teachedu-high-resolution-logo-transparent.png'
					alt='teachedu-high-resolution-logo-transparent'
					width={'110px'}
					height={'50px'}
					border='0'
				/>
			</Link>

			<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
				<Link className='me-3 py-2 link-body-emphasis text-decoration-none' to={'/login'}>Login</Link>
				<Link className='me-3 py-2 link-body-emphasis text-decoration-none' to={'/register'}>Register</Link>
			</nav>
		</div>
	)
}

export default Nabvar
