'use client';

import { useMutation } from '@tanstack/react-query';

import { login } from '../api/login';

const useLoginMutation = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: login,
  });

  return { mutate, isPending };
};

export default useLoginMutation;
