import { PROJECT_BY_ID_QUERY } from '@/sanity/lib/queries';
import { client } from "@/sanity/lib/client";

import { notFound } from 'next/navigation';
import { formatDate } from '@/utils';
import { Suspense } from 'react';
import Skeleton from '@/components/ui/Skeleton';

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }>}) => {
  const id = (await params).id;
  
  const post = await client.fetch(PROJECT_BY_ID_QUERY, { id });


  if(!post) return notFound();

  return (
    <>
    <section className="bg-accent !min-h-[230px] w-full py-10">
      <p className="tag text-center mx-auto w-40">{formatDate(post?._createdAt)}</p>
        <div className="flex justify-center">
          <h1 className="heading mx-auto">{post.title}</h1>
        </div>
      <p className="sub-heading text-center mx-auto !max-w-5xl">{post.description}</p>
    </section>

    <section className="section_container w-3/4">
    
      <h3 className="pt-10">Project Details</h3>
      <article className="pt-10 pb-10 prose break-all">{post.copy}</article>

      <hr className="divider"/>

      <Suspense fallback={<Skeleton/>}></Suspense>
    </section>
      
    </>
  )
}

export default Page