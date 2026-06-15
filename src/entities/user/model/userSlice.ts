import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IWheel } from '@/entities/wheel/model/types'
import type { IRecord } from '@/entities/record/model/types'
import { userApi } from '@/entities/user/model/api'
import type { ISignupPayload, IUser } from './types'

interface UserState {
	id: number | null
	name: string
	email: string
	isAuthenticated: boolean
	loading: boolean
	token: string | null
	error: string | null
	wheels: IWheel[]
	records: IRecord[]
}

const initialState: UserState = {
	id: null,
	name: '',
	email: '',
	isAuthenticated: !!localStorage.getItem('token'),
	loading: false,
	token: localStorage.getItem('token'),
	error: null,
	wheels: [],
	records: []
}

export const loginUser = createAsyncThunk('user/login', async (credentials: { login: string; password: string }) => {
	const response = await userApi.login(credentials)
	return response
})

export const signupUser = createAsyncThunk('user/signup', async (credentials: ISignupPayload) => {
	const response = await userApi.signup(credentials)
	return response
})

export const fetchUserProfile = createAsyncThunk('user/fetchProfile', async () => {
	const response = await userApi.getCurrentProfile()
	return response
})

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<{ id: number; name: string; email: string }>) => {
			state.id = action.payload.id
			state.name = action.payload.name
			state.email = action.payload.email
			state.isAuthenticated = true
		},
		updateUser: (state, action: PayloadAction<IUser>) => {
			state.id = action.payload.user_id
			state.name = action.payload.name
			state.email = action.payload.email
			state.wheels = action.payload.wheels
			state.records = action.payload.records
		},
		logout: () => {
			return initialState
		},
		clearError: (state) => {
			state.error = null
		},
		addWheel: (state, action: PayloadAction<IWheel>) => {
			state.wheels.push(action.payload)
		},
		updateWheel: (state, action: PayloadAction<IWheel>) => {
			const index = state.wheels.findIndex((wheel) => wheel.wheel_id === action.payload.wheel_id)
			if (index !== -1) {
				state.wheels[index] = action.payload
			}
		},
		addRecord: (state, action: PayloadAction<IRecord>) => {
			state.records.push(action.payload)
		},
		updateRecord: (state, action: PayloadAction<IRecord>) => {
			const index = state.records.findIndex((record) => record.record_id === action.payload.record_id)
			if (index !== -1) {
				state.records[index] = action.payload
			}
		},
		removeRecord: (state, action: PayloadAction<number>) => {
			state.records = state.records.filter((record) => record.record_id !== action.payload)
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loading = false
				state.id = action.payload.data.user.user_id
				state.name = action.payload.data.user.name
				state.email = action.payload.data.user.email
				state.token = action.payload.data.token
				state.wheels = action.payload.data.user.wheels
				state.records = action.payload.data.user.records
				state.isAuthenticated = true
				localStorage.setItem('token', action.payload.data.token)
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Ошибка входа'
			})
			.addCase(fetchUserProfile.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchUserProfile.fulfilled, (state, action) => {
				state.loading = false
				state.id = action.payload.data.user_id
				state.name = action.payload.data.name
				state.email = action.payload.data.email
				state.wheels = action.payload.data.wheels
				state.records = action.payload.data.records
				state.isAuthenticated = true
			})
			.addCase(fetchUserProfile.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Ошибка получения профиля'
			})
			.addCase(signupUser.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(signupUser.fulfilled, (state, action) => {
				state.loading = false
				state.id = action.payload.data.user.user_id
				state.name = action.payload.data.user.name
				state.email = action.payload.data.user.email
				state.token = action.payload.data.token
				state.wheels = action.payload.data.user.wheels
				state.records = action.payload.data.user.records
				state.isAuthenticated = true
				localStorage.setItem('token', action.payload.data.token)
			})
			.addCase(signupUser.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Ошибка регистрации'
			})
	}
})

export const { setUser, updateUser, logout, clearError, addWheel, updateWheel, addRecord, updateRecord, removeRecord } =
	userSlice.actions
export default userSlice.reducer
