// page.tsx
import { Suspense } from 'react';
import { fetchFilteredCustomers, CustomerField } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/customers/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  try {
    const customersData = await fetchFilteredCustomers(query);

    return (
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
        </div>
        <Suspense fallback={<InvoicesTableSkeleton />}>
          <CustomersTable customers={customersData} />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch customers:', error);
    // Handle error as needed
  }
}
