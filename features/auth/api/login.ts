import apiClient from '@/lib/axios';

import { ApiResponse } from '@/types/api';

import { LoginInputs, LoginResponse } from '../types/auth.types';

export const login = async (reqBody: LoginInputs) => {
  const { data } = await apiClient.post<ApiResponse<LoginResponse>>(
    '/user/login',
    reqBody,
  );

  return data;
};
