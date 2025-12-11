'use client';

import { useMutation } from '@tanstack/react-query';

import { forgotPassword } from '../api/forgot-password';

const useForgotPasswordMutation = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: forgotPassword,
  });

  return { mutate, isPending };
};

export default useForgotPasswordMutation;
