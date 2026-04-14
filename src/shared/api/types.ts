export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}

export interface ErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}