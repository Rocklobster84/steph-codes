import { Hero, MyWorkHeading, Experience, About, HireMe } from "@/components";
import MyWork, { MyWorkType } from '@/components/MyWork';
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home() {

  const { data: projectPosts } = await sanityFetch({ query: PROJECTS_QUERY });

  return (
    <main className="overflow-hidden">
      <Hero />
      <section id="my-work">
      <MyWorkHeading />
        
          {projectPosts?.length > 0 ? (
            projectPosts.map(( projectPost: MyWorkType ) => (
              <MyWork key={projectPost?._id} projectPost={projectPost} />
            ))
          ) : (
            <p className="no-results">No projects found</p>
          )}
        
      </section>
      <SanityLive />

      <Experience />
      <About />
      <HireMe />
    </main>
  );
}