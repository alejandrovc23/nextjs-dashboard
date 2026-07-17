import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-36">
        <div className="w-32 text-white md:w-36">
          <AcmeLogo />
        </div>
      </div>
      <div className="flex grow items-center justify-center p-6 md:px-28 md:py-12">
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
