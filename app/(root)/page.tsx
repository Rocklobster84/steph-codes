import { Hero, MyWorkHeading, Experience, About, HireMe } from "@/components";
import MyWork, { MyWorkType } from '@/components/MyWork';
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";

export default async function Home() {

  const { data: projectPosts } = await sanityFetch({ query: PROJECTS_QUERY });

  return (
    <main className="overflow-hidden">
      <Hero />
      <section id="my-work">
      <MyWorkHeading />
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3 mx-auto">
          {projectPosts?.length > 0 ? (
            projectPosts.map(( projectPost: MyWorkType ) => (
              <MyWork key={projectPost?._id} projectPost={projectPost} />
            ))
          ) : (
            <p className="no-results">No projects found</p>
          )}
        </div>
        <div className="flex max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3 justify-center mx-auto">
          <Link href={`/projects`}>
            <CustomButton
              title="View All Projects"
              btnType="button"
              containerStyles="text-white text-sm rounded-sm bg-neutral-500 min-w-[80px] px-3 py-3 hover:bg-accent"
            />
          </Link>  
        </div>
      </section>
      <SanityLive />

      <Experience />
      <About />
      <HireMe />
      <form name="contact" netlify hidden>
        <input type="text" name="first" />
        <input type="text" name="last" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
    </main>
  );
}