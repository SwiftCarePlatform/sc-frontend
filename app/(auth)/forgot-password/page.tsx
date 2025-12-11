'use client';

import ForgotPasswordForm from '@/features/auth/components/ForgotPasswordForm';
import useForgotPasswordMutation from '@/features/auth/queries/useForgotPasswordMutation';

function ForgotPasswordPage() {
  const { mutate, isPending } = useForgotPasswordMutation();

  return (
    <div>
      <ForgotPasswordForm
        forgotPasswordMutation={mutate}
        isPending={isPending}
      />
    </div>
  );
}

export default ForgotPasswordPage;
