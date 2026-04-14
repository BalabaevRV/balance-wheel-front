export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  
  // Users
  USER_PROFILE: '/users/profile',
  USER_WHEELS: '/users/wheels',
  
  // Balance Wheels
  WHEELS: '/wheels',
  WHEEL_BY_ID: (id: number) => `/wheels/${id}`,
  WHEEL_FIELDS: (wheelId: number) => `/wheels/${wheelId}/fields`,
  
  // Records
  RECORDS: '/records',
  RECORD_BY_ID: (id: number) => `/records/${id}`,
  RECORDS_BY_WHEEL: (wheelId: number) => `/records/wheel/${wheelId}`,
} as const;