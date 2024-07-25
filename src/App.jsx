import { Route, Routes } from 'react-router-dom'
import { Main, Login, Register, Navbar } from './components'
import { useEffect } from 'react'
import AuthService from './service/auth'
import { useDispatch } from 'react-redux'
import { signUserSuccess } from './slice/auth'
import { getItem } from './helpers/persistance-storage'

const App = () => {
	const dispatch = useDispatch()

	const getUser = async () => {
		try {
			const response = await AuthService.getUser()
			dispatch(signUserSuccess(response.user))
		} catch (error) {}
	}

	useEffect(() => {
		const token = getItem('token')
		if (token) {
			getUser()
		}
	}, [])

	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</>
	)
}

export default App
