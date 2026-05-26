import { api } from '@/shared/api/instance';
import type { ApiResponse }  from '@/shared/api/types';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import type { IWheelSave, IWheel } from './types';

export const wheelApi = {
  getWheel: () => 
    api.get<IWheel>(API_ENDPOINTS.USER_PROFILE),

  getWheels: (id: number) => 
    api.get<IWheel[]>(API_ENDPOINTS.WHEEL_BY_ID(id)),

  save: (data: IWheelSave) => 
    api.post<ApiResponse<IWheel>>(API_ENDPOINTS.SAVE_WHEEL, data),
};