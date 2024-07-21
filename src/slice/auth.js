import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	loggedin: false,
	error: null,
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// Login
		loginUserStart: state => {
			state.isLoading = true
		},
		loginUserSuccess: state => {},
		loginUserFailure: state => {},

		// Register
		registerUserStart: state => {
			state.isLoading = true
		},
		registerUserSuccess: state => {
			state.loggedin = true
			state.isLoading = false
		},
		registerUserFailure: state => {
			state.isLoading = false
			state.error = 'Error'
		},
	},
})

export const {
	loginUserStart,
	registerUserStart,
	registerUserSuccess,
	registerUserFailure,
} = authSlice.actions
export default authSlice.reducer
