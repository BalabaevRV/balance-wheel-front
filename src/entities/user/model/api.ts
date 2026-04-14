import { api } from '@/shared/api/instance';
import { API_ENDPOINTS } from '@/shared/api/endpoints';
import type { IUser, ILoginData, IRegisterData } from './types';

export const userApi = {
  // Получить профиль
  getProfile: () => 
    api.get<IUser>(API_ENDPOINTS.USER_PROFILE),
  
  // Обновить профиль
  updateProfile: (data: Partial<IUser>) => 
    api.patch<IUser>(API_ENDPOINTS.USER_PROFILE, data),
  
  // Логин
  login: (credentials: ILoginData) => 
    api.post<{ user: IUser; token: string }>(API_ENDPOINTS.LOGIN, credentials),
  
  // Регистрация
  register: (data: IRegisterData) => 
    api.post<{ user: IUser; token: string }>(API_ENDPOINTS.REGISTER, data),
  
  // Логаут
  logout: () => 
    api.post(API_ENDPOINTS.LOGOUT),
};