import { Suspense } from 'react';
import { fetchCustomers } from '@/app/lib/data'; // Import the function to fetch customer data
import { lusitana } from '@/app/ui/fonts';
import { CustomersTable } from '@/app/ui/customers/table'; // Create a CustomersTable component
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

  // Fetch customer data instead of invoices data
  const customersData = await fetchCustomers(query, currentPage);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* You can add a search component for customers if needed */}
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        {/* Render the CustomersTable component with customer data */}
        <CustomersTable customers={customersData} />
      </Suspense>
      {/* Pagination logic for customers can be added if needed */}
    </div>
  );
}
