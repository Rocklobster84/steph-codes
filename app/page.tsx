import { Hero, MyWork, Experience, About, HireMe } from "@/components";
/*import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";*/

export default function Home() {

  /*const projectPosts = await client.fetch(PROJECTS_QUERY);*/

  const projectPosts = [{
    _createdAt: new Date(),
    user: {_id: 1 },
    description: "This is a description", 
    image: "https://github.com/Rocklobster84/StephCodesStatic/blob/main/images/bb63-salon.png?raw=true",
    category: "Website",
    title: "BB63 Salon"
  }];

  return (
    <main className="overflow-hidden">
      <Hero />

      <section>
        
          {projectPosts?.length > 0 ? (
            projectPosts.map((projectPost: MyWorkType ) => (
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