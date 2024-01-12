import { Suspense } from 'react';
import { fetchCustomers } from '@/app/lib/data';
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
  const currentPage = Number(searchParams?.page) || 1;

  const customersData = await fetchCustomers();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <CustomersTable customers={customersData} />
      </Suspense>
    </div>
  );
}
