import { api } from '@/shared/api/instance'
import { API_ENDPOINTS } from '@/shared/api/endpoints'
import type { IUser, IUserToken, ILoginPayload, ISignupPayload } from '@/entities/user/model/types'
import type { IRecord } from '@/entities/record/model/types'
import type { ApiResponse } from '@/shared/api/types'

export const userApi = {
	getProfile: () => api.get<IUser>(API_ENDPOINTS.USER_PROFILE),

	getCurrentProfile: () => api.get<IUser>(API_ENDPOINTS.USER_PROFILE),

	updateProfile: (data: Partial<IUser>) => api.patch<IUser>(API_ENDPOINTS.USER_PROFILE, data),

	getRecordsList: (id: number): Promise<ApiResponse<IRecord[]>> => {
		return api.get(API_ENDPOINTS.USER_RECORDS(id))
	},

	login: (credentials: ILoginPayload) => api.post<IUserToken>(API_ENDPOINTS.LOGIN, credentials),

	signup: (data: ISignupPayload) => api.post<IUserToken>(API_ENDPOINTS.SIGNUP, data),

	logout: () => api.post(API_ENDPOINTS.LOGOUT)
}
