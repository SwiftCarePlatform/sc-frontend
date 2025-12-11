import apiClient from '@/lib/axios';
import { formatISO } from 'date-fns';

import { ApiResponse } from '@/types/api';

import { SignUpInputs, SignUpResponse } from '../types/auth.types';

export const signUp = async (userData: SignUpInputs) => {
  const reqBody = {
    ...userData,
    dob: formatISO(userData.dob),
  };

  const { data } = await apiClient.post<ApiResponse<SignUpResponse>>(
    '/user/signup',
    reqBody,
  );

  return data;
};
