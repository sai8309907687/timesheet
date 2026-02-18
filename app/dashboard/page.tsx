import { Suspense } from 'react';

import { AuthLayout } from '@/layouts/auth-layout';
import DashboardPage from '@/modules/dashboard/page';
import { SkeletonTable } from '@/skeleton/skeleton-table';

export default function Dashboard() {
  return (
    <Suspense fallback={<SkeletonPage />}>
      <DashboardPage />
    </Suspense>
  );
}

function SkeletonPage() {
  return (
    <AuthLayout>
      <SkeletonTable />
    </AuthLayout>
  );
}
