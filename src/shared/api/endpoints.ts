export const API_ENDPOINTS = {
	// Auth
	LOGIN: '/login',
	SIGNUP: '/signup',
	LOGOUT: '/logout',

	// Users
	USER_PROFILE: '/user',
	USER_RECORDS: (id: number) => `/user/${id}/records`,
	USER_WHEELS: (id: number) => `/user/${id}/wheels`,

	// Balance Wheels
	WHEELS: '/wheels',
	WHEEL_BY_ID: (id: number) => `/wheels/${id}`,
	WHEEL_ATTACH: (wheelId: number) => `/wheels/${wheelId}/attach`,
	WHEEL_DETACH: (wheelId: number) => `/wheels/${wheelId}/detach`,
	SAVE_WHEEL: '/wheels',

	// Records
	RECORD_SAVE: '/records',
	RECORD_BY_ID: (id: number) => `/records/${id}`,
	RECORD_DELETE: (id: number) => `/records/${id}`
}
