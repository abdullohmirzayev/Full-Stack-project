import axios from './api'

const AuthService = {
	async useRegister(user) {
		const response = await axios.post('/users', {user})
		
		return response.data
	},
	async useLogin() {
		// const response = await axios.post('/users/login')
	},
	async getUser() {
		// const response = await axios.post('/user')
	},
}

export default AuthService
