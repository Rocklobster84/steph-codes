import Image from 'next/image'
import ImageGallery from './ImageGallery'
import { photos } from "@/constants";

const About = () => {
  return (
    <div>
      <div className="flex flex-col mx-auto max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3 pb-20">
        <div className="shrink-0 self-end max-w-full h-0 border-white border-solid border-[1px] w-full sm:px" />
        <div className="flex flex-nowrap gap-5 justify-between w-full max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex gap-5 justify-between max-w-full w-[80px] md:w-[100px]">
              <div className="shrink-0 border-white bg-white border-solid border-[1px] h-[100px] md:h-[130px] w-[1px]" />
              <div className="shrink-0 border-white bg-white border-solid border-[1px] h-[100px] md:h-[130px] w-[1px]" />
            </div>
            <div className="flex flex-col self-end w-full max-w-[1325px] max-md:max-w-full">
              <div className="titles self-start text-4xl font-bold text-white md:max-w-full md:text-6xl mt-10 uppercase">
                About
              </div>
              <div className="self-start mt-3 text-2xl text-white md:max-w-full md:text-3xl">
                Passionate coder, lifelong learner, mentor, and problem-solver.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-auto max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3">
        <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center md:block md:mr-10">
          <Image 
            src="/steph-headshot.jpg"
            width={300}
            height={300}
            alt="Headshot of Stephanie Thompson"
            className="rounded-md object-cover h-auto mb-6 max-w-full lg:w-[450px] lg:h-[350px] lg:object-top lg:float-end"
          />
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 pl-0 mb-6 md:mb-0 md:pr-14 lg:pr-14 lg:text-lg">
          <p className="mb-6">
            Hi, I&#39;m Stephanie — a Full-Stack Developer based in Fort Worth, Texas.
          </p>
          <p className="mb-6">
            I&#39;m passionate about crafting thoughtful, high-quality solutions and thrive on helping clients solve real-world problems through clean design, scalable architecture, and strong collaboration.
          </p>
          <p className="mb-6">
            I&#39;ve been coding since 2008, when I dove in and taught myself PHP to build an e-commerce store for a small clothing company I co-owned. Unfortunately, the Wayback Machine only has a single capture of what I&#39;m sure was an amazing piece of work.
          </p>
          <p className="mb-6">
            My career path has been anything but linear. I started out as a self-taught developer and later earned my B.S. in Computer Science. Before moving into tech full-time, I worked in law, real estate, marketing, and even screen printing. These varied experiences give me a unique point of view and a practical mindset that I bring to every project. I also spent time volunteering with Women Who Code—before its dissolution—supporting a more inclusive future in tech.
          </p>
          <p className="mb-6">
            When I&#39;m not at my keyboard, I&#39;m probably behind a camera. Feel free to explore some of my photography on the Photography page. I also have an excessive number of pets, including a nearly 40-year-old three-toed box turtle. And if you're really curious, ask me about the band I used to be in—we may not have been the best, but we definitely had fun.
          </p>
          <p className="mb-6">
            I&#39;m currently open to both contract and full-time opportunities — feel free to reach out!
          </p>
        </div>

      </div>

      <div className="mx-auto max-w-3/4 sm:max-w-3/4 md:max-w-3/4 lg:max-w-2/3">
        <ImageGallery photos={photos} />
      </div>
    </div>
  )
}

export default About