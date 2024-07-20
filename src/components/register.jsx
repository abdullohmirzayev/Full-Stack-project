import { useState } from 'react'
import { icon } from '../constants'
import { Input } from '../ui'

const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form>
					<img
						className='mb-2'
						src={icon}
						alt='teachedu-high-resolution-logo'
						width='72'
						height='70'
						border='0'
					/>
					<h1 className='h3 mb-3 fw-normal'>Please register</h1>

					<Input label={'Username'} state={name} setState={setName} />
					<Input
						label={'Email address'}
						type='email'
						state={email}
						setState={setEmail}
					/>
					<Input
						label={'Password'}
						type='password'
						state={password}
						setState={setPassword}
					/>

					<button className='btn btn-primary w-100 py-2 mt-2' type='submit'>
						Register
					</button>
					<p className='mt-5 mb-3 text-body-secondary'>© 2017–2024</p>
				</form>
			</main>
		</div>
	)
}

export default Register
