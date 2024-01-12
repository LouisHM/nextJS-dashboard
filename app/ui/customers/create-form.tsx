import {
  UserIcon,
  MailIcon,
  ImageIcon, // Ajout d'une icône pour l'image de profil par exemple
} from '@heroicons/react/24/outline';

import { User } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createUser } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function UserForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* User Name */}
        <div className="mb-4">
          <label htmlFor="userName" className="mb-2 block text-sm font-medium">
            User Name
          </label>
          <div className="relative">
            <input
              id="userName"
              name="userName"
              type="text"
              placeholder="Enter user name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="userName-error" aria-live="polite" aria-atomic="true">
            {state.errors?.userName &&
              state.errors.userName.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* User Email */}
        <div className="mb-4">
          <label htmlFor="userEmail" className="mb-2 block text-sm font-medium">
            User Email
          </label>
          <div className="relative">
            <input
              id="userEmail"
              name="userEmail"
              type="email"
              placeholder="Enter user email"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <MailIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="userEmail-error" aria-live="polite" aria-atomic="true">
            {state.errors?.userEmail &&
              state.errors.userEmail.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* User Image URL */}
        <div className="mb-4">
          <label htmlFor="userImage" className="mb-2 block text-sm font-medium">
            User Image URL
          </label>
          <div className="relative">
            <input
              id="userImage"
              name="userImage"
              type="text"
              placeholder="Enter user image URL"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <ImageIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="userImage-error" aria-live="polite" aria-atomic="true">
            {state.errors?.userImage &&
              state.errors.userImage.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create User</Button>
      </div>
    </form>
  );
}
