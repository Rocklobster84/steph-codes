import Projects from '@/components/Projects'
import { MyWorkType } from '@/components/MyWork';
import { PROJECTS_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import CategoryBar from "@/components/CategoryBar";

export default async function Page() {
  const { data: projectPosts } = await sanityFetch({ query: PROJECTS_PAGE_QUERY });

  return (
    <>
      <section className="bg-accent-light !min-h-[230px] w-full py-10">
        <p className="tag text-center mx-auto w-40">Projects</p>
          <div className="flex justify-center">
            <h1 className="heading mx-auto">My Work</h1>
          </div>
        <p className="sub-heading text-center mx-auto !max-w-5xl">These selected projects reflect my dedication to building user-friendly, responsive interfaces, writing clean and scalable code, and creating solutions that make a measurable difference.</p>
      </section>
  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3 mx-auto">
        {projectPosts?.length > 0 ? (
          projectPosts.map(( projectPost: MyWorkType ) => (
            <Projects key={projectPost?._id} projectPost={projectPost} />
          ))
        ) : (
          <p className="no-results">No projects found</p>
        )}
      </div>
      
    </>
  );
}
