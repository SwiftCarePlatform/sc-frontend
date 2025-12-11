import apiClient from '@/lib/axios';

import { ApiResponse } from '@/types/api';

import {
  ForgotPasswordInputs,
  ForgotPasswordResponse,
} from '../types/auth.types';

export const forgotPassword = async (reqBody: ForgotPasswordInputs) => {
  const { data } = await apiClient.post<ApiResponse<ForgotPasswordResponse>>(
    '/user/forgot-password',
    reqBody,
  );

  return data;
};
