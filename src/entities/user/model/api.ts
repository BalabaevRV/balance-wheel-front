import { api } from '@/shared/api/instance';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import type { IUser, IUserToken, ILoginPayload, ISignupPayload } from '@/entities/user/model/types';

export const userApi = {
  getProfile: () => 
    api.get<IUser>(API_ENDPOINTS.USER_PROFILE),

  updateProfile: (data: Partial<IUser>) => 
    api.patch<IUser>(API_ENDPOINTS.USER_PROFILE, data),

  login: (credentials: ILoginPayload) => 
    api.post<{ data: IUserToken }>(API_ENDPOINTS.LOGIN, credentials),

  register: (data: ISignupPayload) => 
    api.post<{ data: IUserToken }>(API_ENDPOINTS.REGISTER, data),
  
  logout: () => 
    api.post(API_ENDPOINTS.LOGOUT),
};