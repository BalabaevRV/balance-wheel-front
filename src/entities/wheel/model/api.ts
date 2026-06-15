import { api } from '@/shared/api/instance'
import type { ApiResponse } from '@/shared/api/types'
import { API_ENDPOINTS } from '@/shared/api/endpoints'
import type { IWheelSave, IWheel } from './types'
import type { IUser } from '@/entities/user/model/types'

export const wheelApi = {
	getWheelsList: (): Promise<ApiResponse<IWheel[]>> => {
		return api.get('/wheels')
	},

	getWheel: (id: number) => api.get<IWheel[]>(API_ENDPOINTS.WHEEL_BY_ID(id)),

	attachWheel: (wheelId: number): Promise<ApiResponse<IUser>> => {
		return api.post(API_ENDPOINTS.WHEEL_ATTACH(wheelId))
	},

	detachWheel: (wheelId: number): Promise<ApiResponse<IUser>> => {
		return api.post(API_ENDPOINTS.WHEEL_DETACH(wheelId))
	},

	save: (data: IWheelSave): Promise<ApiResponse<IWheel>> => {
		return api.post(API_ENDPOINTS.SAVE_WHEEL, data)
	}
}
