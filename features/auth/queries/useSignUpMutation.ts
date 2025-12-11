'use client';

import { useMutation } from '@tanstack/react-query';

import { signUp } from '../api/sign-up';

const useSignUpMutation = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: signUp,
  });

  return { mutate, isPending };
};

export default useSignUpMutation;
