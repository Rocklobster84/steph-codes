import { PLAYLIST_BY_SLUG_QUERY, PROJECT_BY_ID_QUERY,  } from '@/sanity/lib/queries';
import { client } from "@/sanity/lib/client";
import { notFound } from 'next/navigation';
import { formatDate } from '@/utils';
import { Suspense } from 'react';
import Skeleton from '@/components/ui/Skeleton';
import { MyWorkType } from '@/components/MyWork';
import Markdown from 'react-markdown';
import YouMayAlsoLike from '@/components/YouMayAlsoLike';

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

      <img
        src={projectPost.image}
        alt={projectPost.title}
        className="w-full h-auto rounded-xl"
      />
    
      <h3 className="pt-10 pb-10">Project Details</h3>
      <Markdown>{projectPost.copy}</Markdown>
      <div className="pb-10"></div>

      <hr className="divider" />

      {Websites?.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <h3 className="mt-12 mb-12">You May Also Like</h3>

          <div className="mt-7 card_grid-sm">
            {Websites.map((projectPost: MyWorkType, i: number) => (
              <YouMayAlsoLike key={i} projectPost={projectPost} />
          ))}
          </div>
        </div> 
      )}

      <Suspense fallback={<Skeleton/>}></Suspense>
    </section>
      
    </>
  )
}

export default Page