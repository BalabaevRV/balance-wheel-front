export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/login',
  SIGNUP: '/signup',
  LOGOUT: '/logout',
  
  // Users
  USER_PROFILE: '/user',
  
  // Balance Wheels
  WHEELS: '/wheels',
  WHEEL_BY_ID: (id: number) => `/wheels/${id}`,
  SAVE_WHEEL: '/wheels',
  
  // Records
  RECORDS: '/records',
  RECORD_BY_ID: (id: number) => `/records/${id}`,
  RECORDS_BY_WHEEL: (wheelId: number) => `/records/wheel/${wheelId}`,
}