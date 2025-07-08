import { Hero, Experience, About, HireMe } from "@/components";
import MyWork, { MyWorkType } from '@/components/MyWork';
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {

  const projectPosts = await client.fetch<MyWorkType[]>(PROJECTS_QUERY);

  return (
    <main className="overflow-hidden">
      <Hero />

      <section>
        
          {projectPosts?.length > 0 ? (
            projectPosts.map(( projectPost: MyWorkType ) => (
              <MyWork key={projectPost?._id} projectPost={projectPost} />
            ))
          ) : (
            <p className="no-results">No projects found</p>
          )}
        
      </section>

      <Experience />
      <About />
      <HireMe />
    </main>
  );
}