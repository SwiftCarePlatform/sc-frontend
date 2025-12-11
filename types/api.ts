// Generic structure every response will be transformed to
export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T | null;
  message?: string;
  error?: {
    code?: string | number;
    details?: unknown;
  };
}
