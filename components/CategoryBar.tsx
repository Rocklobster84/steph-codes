"use client";

import { Description, Field, Label, Select } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useRouter, useSearchParams } from 'next/navigation'


export default function CategoryBar({ categories }: { categories: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const value = e.target.value;
  const query = value === "All" ? "" : `?category=${value}`;
  router.push(`/projects${query}`);
  };

  return (
    <>
    <div className="flex mx-auto max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3 mt-10 mb-6">
      <div className="w-full max-w-md">
        <Field>
          <Label className="text-sm/6 font-medium text-white">Select a Category</Label>
            <Description className="text-sm/6 text-white/50">What are you looking for?</Description>
              <Select value={currentCategory}
                      onChange={handleChange}
                      className='mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25' aria-label="Select Category">
                <option value="All">All</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
              </Select>
          <ChevronDownIcon
              className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
              aria-hidden="true"
          />
        </Field>
      </div>
    </div>
    </>
  )
}