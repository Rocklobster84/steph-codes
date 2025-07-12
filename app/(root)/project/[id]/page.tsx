import { PLAYLIST_BY_SLUG_QUERY, PROJECT_BY_ID_QUERY,  } from '@/sanity/lib/queries';
import { client } from "@/sanity/lib/client";
import { notFound } from 'next/navigation';
import { formatDate } from '@/utils';
import { Suspense } from 'react';
import Skeleton from '@/components/ui/Skeleton';
import MyWork, { MyWorkType } from '@/components/MyWork';

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }>}) => {
  const id = (await params).id;
  
  const [projectPost, { select: Websites }] = await Promise.all([
    client.fetch(PROJECT_BY_ID_QUERY, { id }),
    client.fetch(PLAYLIST_BY_SLUG_QUERY, {
      slug: "websites",
    }),
  ]);

  if(!projectPost) return notFound();

  return (
    <>
    <section className="bg-accent !min-h-[230px] w-full py-10">
      <p className="tag text-center mx-auto w-40">{formatDate(projectPost?._createdAt)}</p>
        <div className="flex justify-center">
          <h1 className="heading mx-auto">{projectPost.title}</h1>
        </div>
      <p className="sub-heading text-center mx-auto !max-w-5xl">{projectPost.description}</p>
    </section>

    <section className="section_container w-3/4">
    
      <h3 className="pt-10">Project Details</h3>
      <article className="pt-10 pb-10 prose break-all">{projectPost.copy}</article>

      {Websites?.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <p className="text-30-semibold">You May Also Like</p>

          <ul className="mt-7 card_grid-sm">
            {Websites.map((projectPost: MyWorkType, i: number) => (
              <MyWork key={i} projectPost={projectPost} />
          ))}
          </ul>
        </div> 
      )}

      <Suspense fallback={<Skeleton/>}></Suspense>
    </section>
      
    </>
  )
}

export default Page