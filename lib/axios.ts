import axios, { AxiosError, AxiosResponse } from 'axios';

import { ApiResponse } from '@/types/api';

const TEN_SECONDS = 10 * 1000;

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: TEN_SECONDS,
});

export default apiClient;

// Helper to normalize success responses
const normalizeSuccess = (response: AxiosResponse): ApiResponse => {
  // Scenario A: Backend returns { data: {...} }
  if (response.data && response.data.data) {
    return {
      success: true,
      data: response.data.data,
      message: response.data.message || 'Success',
    };
  }

  // Scenario B: Backend returns raw data {...}
  return {
    success: true,
    data: response.data,
    message: response.data.message || 'Success',
  };
};

// Helper to normalize error responses
const normalizeError = (
  error: AxiosError<{ detail: string[] | string }>,
): ApiResponse => {
  const backendError = error.response?.data;

  const backendMessage = Array.isArray(backendError?.detail)
    ? backendError?.detail[0]
    : backendError?.detail;

  return {
    success: false,
    data: null,
    message: backendMessage || error.message || 'An unexpected error occurred',
    error: {
      code: error.response?.status,
      details: backendMessage || backendError, // Capture validation errors
    },
  };
};

// RESPONSE INTERCEPTOR
apiClient.interceptors.response.use(
  (response) => {
    // eslint-disable-next-line
    return normalizeSuccess(response) as any;
  },
  (error) => {
    return Promise.reject(normalizeError(error));
  },
);
